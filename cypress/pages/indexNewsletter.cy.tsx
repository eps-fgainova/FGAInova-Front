import React from 'react'
import Newsletter from '../../src/pages/Newsletter'

describe('<Newsletter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Newsletter />)
  })
})