import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import HeroBanner from '../../src/components/HeroBanner'

describe('<HeroBanner />', () => {
  it('Componente deve ter o texto "Crie ideias,"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <HeroBanner />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('span').contains("Crie ideias,").should('be.visible');
  })

  it('Componente deve ter o texto "mude o mundo"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <HeroBanner />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('span').contains("mude o mundo").should('be.visible');
  })

  it('Componente deve ter o texto "Comece agora,"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <HeroBanner />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('button').contains("Comece agora").should('be.visible');
  })

  it('Componente deve ter o texto "Sobre,"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <HeroBanner />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('button').contains("Sobre").should('be.visible');
  })
})