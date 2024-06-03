import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import Sobre from '../../src/pages/Sobre'

describe('<Sobre />', () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Sobre />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
  })

  it('Componente deve ter o tópico "Plataforma de inovação para alunos da FGA"', () => {
    cy.get('h1').contains("Sobre").should('be.visible');
  })

  it('Componente deve ter o tópico "Objetivos"', () => {
    cy.get('h2').contains("Objetivos").should('be.visible');

  })

  it('Componente deve ter o tópico "Projeto"', () => {
    cy.get('h2').contains("Projeto").should('be.visible');
  })

})