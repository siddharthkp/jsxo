import React from 'react'
import { render } from 'react-testing-library'
import App from './App'

it('renders correctly', () => {
  const { queryByText } = render(<App />)

  expect(queryByText('It works!')).toBeTruthy()
})
