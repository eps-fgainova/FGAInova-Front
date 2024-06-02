import React from 'react'
import { AuthProvider } from '../../src/context/AuthContext'

describe('<AuthProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AuthProvider />)
  })
})