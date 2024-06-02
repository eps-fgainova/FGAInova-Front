import React from 'react'
import ProjetoView from '../../src/pages/ProjetoView'

describe('<ProjetoView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProjetoView />)
  })
})