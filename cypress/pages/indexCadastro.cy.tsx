import React from 'react'
import Cadastro from '../../src/pages/Cadastro'

describe('<Cadastro />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cadastro />)
  })
})