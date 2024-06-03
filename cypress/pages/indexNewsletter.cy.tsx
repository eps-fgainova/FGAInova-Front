import React from 'react'
import Newsletter from '../../src/pages/Newsletter'

describe('<Newsletter />', () => {
  it('Deve renderizar componentes da página', () => {
    cy.mount(<Newsletter />)
    cy.get('h2').should('be.visible')
    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
  })
})