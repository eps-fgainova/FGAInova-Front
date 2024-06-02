import React from 'react'
import Projetos from '../../src/pages/Projetos'

describe('<Projetos />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Projetos />)
  })
})