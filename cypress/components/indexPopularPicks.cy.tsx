import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import PopularPicks from '../../src/components/PopularPicks'

describe('<PopularPicks />', () => {
  it('Componente deve ter o texto "+ Acessados"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <PopularPicks />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('h2').contains("+ Acessados").should('be.visible');
  })

  it('Componente deve ter o botão "+ Projetos"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <PopularPicks />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('a').contains("+ Projetos").should('be.visible');
  })
})