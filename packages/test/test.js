const pluginTester = require('babel-plugin-tester')
const glob = require('glob')
const path = require('path')
const prettier = require('prettier')
const prettierConfig = require('../../.prettierrc.js')

const fixtures = glob.sync('fixtures/**/code.js')

const tests = fixtures.map(filename => ({
  title: filename,
  fixture: path.join(__dirname, filename),
  outputFixture: path.join(__dirname, filename.replace('code', 'output'))
}))

const plugin = require('babel-plugin-jsxo')

pluginTester({
  plugin,
  babelOptions: {
    presets: ['@babel/react']
  },
  tests,
  formatResult: code => prettier.format(code, prettierConfig).trim()
})
