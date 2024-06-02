import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import Header from '../../src/components/Header'

describe('<Header />', () => {
  const mock = {
    "titulo": "Titulo de Teste",
    "descricaoCurta": "Descrição de Teste",
    "tags": ['tag1', 'tag2'],
    "_id": "1",
    "pessoaId": "user-id",
  }

  it('Componente deve ter o botão "PROJETOS"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Header {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('a').contains('PROJETOS').should('be.visible');
  })

  it('Componente deve ter o botão "SOBRE"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Header {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('a').contains('SOBRE').should('be.visible');
  })

  it('Componente deve ter o botão "NEWSLETTER"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Header {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('a').contains('NEWSLETTER').should('be.visible');
  })

  it('Componente deve ter o botão "Cadastrar"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Header {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('a').contains('Cadastrar').should('be.visible');
  })

  it('Componente deve ter o botão "Entrar"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Header {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('a').contains('Entrar').should('be.visible');
  })
})