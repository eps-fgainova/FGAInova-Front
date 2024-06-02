import React from 'react'
import { AppProvider } from '../../src/context'

describe('<AppProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppProvider />)
  })
})