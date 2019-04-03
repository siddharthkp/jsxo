import React from 'react'
function Code(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'a',
      {
        href: props.href
      },
      props.children
    )
  )
}

export default Code
