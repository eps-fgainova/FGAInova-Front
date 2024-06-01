import React from 'react'
import CardPopularPicks from '../../src/components/CardPopularPicks'

describe('<CardPopularPicks />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardPopularPicks />)
  })
})