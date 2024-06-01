import React from 'react'
import InputTag from '../../src/components/InputTag'

describe('<InputTag />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<InputTag />)
  })
})