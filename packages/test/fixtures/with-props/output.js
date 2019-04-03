import React from 'react'
function Code(props) {
  return React.createElement(
    'a',
    {
      href: props.href
    },
    props.children
  )
}

export default Code
