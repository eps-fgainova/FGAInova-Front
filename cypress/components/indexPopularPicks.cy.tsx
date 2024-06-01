import React from 'react'
import PopularPicks from '../../src/components/PopularPicks'

describe('<PopularPicks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PopularPicks />)
  })
})