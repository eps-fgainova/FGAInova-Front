import React from 'react'
import { ProtectedLayout } from '../../src/components/ ProtectedLayout'

describe('<ProtectedLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProtectedLayout />)
  })
})