import React from 'react'
import Button from './button'

function Code(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(Button, null, 'Click me')
  )
}

export default Code
