import React from 'react'
import HeroBanner from '../../src/components/HeroBanner'

describe('<HeroBanner />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HeroBanner />)
  })
})