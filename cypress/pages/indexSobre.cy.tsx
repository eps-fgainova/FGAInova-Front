import React from 'react'
import Sobre from '../../src/pages/Sobre'

describe('<Sobre />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Sobre />)
  })
})