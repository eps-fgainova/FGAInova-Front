import React from 'react'
import { BlogAuthor } from '../../src/pages/Perfil'

describe('<BlogAuthor />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BlogAuthor />)
  })
})