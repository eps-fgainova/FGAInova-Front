import React from 'react'
import CreateProjectForm from '../../src/pages/NovoProjeto'

describe('<CreateProjectForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateProjectForm />)
  })
})