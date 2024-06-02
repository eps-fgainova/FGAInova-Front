import React from 'react'
import { RoutesMain } from '../../src/routes'

describe('<RoutesMain />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RoutesMain />)
  })
})