import React from 'react'
import About from '../../src/components/About'

describe('<About />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<About />)
  })
})