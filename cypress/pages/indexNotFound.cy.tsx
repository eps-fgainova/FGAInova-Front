import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import NotFound from '../../src/pages/NotFound'

describe('<NotFound />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <NotFound />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('h2').contains('404').should('be.visible')
    cy.get('p').contains('Página não encontrada').should('be.visible')
  })
})