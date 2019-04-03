const { parse } = require('path')
const camelCase = require('lodash.camelcase')
const capitalize = require('lodash.capitalize')

module.exports = ({ types: t }) => {
  return {
    name: 'jhx',
    visitor: {
      Function: (path, state) => {
        // if file already has a function, ignore
        // TODO: This will also catch functions that are
        //       React components which is silly
        state.file.set('ignore', true)
      },
      JSXElement: (path, state) => {
        if (state.file.get('ignore')) return

        // if this is not the top level JSX, do nothing
        if (state.file.get('foundTopLevelJSX')) return
        // otherwise set a flag that top level JSX has been found
        state.file.set('foundTopLevelJSX', true)

        // get Component name from file-name
        const { name } = parse(state.filename)
        const componentName = capitalize(camelCase(name))

        state.file.set('componentName', componentName)

        // create a function Component
        const functionDeclaration = t.functionDeclaration(
          t.identifier(componentName), // function name
          [t.identifier('props')], // arguments
          t.blockStatement([t.returnStatement(path.node)]) // body
        )

        // replace JSX Element with Component
        path.replaceWithMultiple([functionDeclaration])
      },
      Program: {
        enter: (path, state) => {
          // if it's a file with ReactDOM, we probably don't
          // want to touch it
          if (path.scope.hasBinding('ReactDOM')) {
            state.file.set('ignore', true)
          }
        },
        exit: (path, state) => {
          // ignore if file does not have any JSX
          if (!state.file.get('foundTopLevelJSX')) return

          const componentName = state.file.get('componentName')

          // insert import declaration for React on top
          path.node.body.unshift(
            t.importDeclaration(
              [t.importDefaultSpecifier(t.identifier('React'))],
              t.stringLiteral('react')
            )
          )

          // add export statement after the Component at the end
          path.node.body.push(
            t.exportDefaultDeclaration(t.identifier(componentName))
          )
        }
      }
    }
  }
}
