import React from 'react'
function Code(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('span', null, props.name)
  )
}

export default Code
