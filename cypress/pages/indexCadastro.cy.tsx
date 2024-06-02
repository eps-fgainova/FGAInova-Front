import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import Cadastro from '../../src/pages/Cadastro'

describe('<Cadastro />', () => {
  it('Página de cadastro deve ter os campos Nome, Email e Senha', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Cadastro />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('input[placeholder="Nome completo"]').should('be.visible')
    cy.get('input[placeholder="seuemail@mail.com"]').should('be.visible')
    cy.get('input[placeholder="Senha"]').should('be.visible')
  })

  it('Página de cadastro deve ter o botão "Cadastrar"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Cadastro />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('button').contains('Cadastrar').should('be.visible')
  })

  it('Toast de confirmação de cadastro', () => {
    cy.intercept('POST', '/cliente', {
      statusCode: 201,
      body: {
        message: 'Cadastro realizado com sucesso!'
      }
    }).as('postCadastro');


    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Cadastro />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('input[placeholder="Nome completo"]').type('Mockerson Silva');
    cy.get('input[placeholder="seuemail@mail.com"]').type('mockersonsilva@mail.com');
    cy.get('input[placeholder="Senha"]').type('m0ck$on$|lv4');
    cy.get('.chakra-button').click()

    cy.wait('@postCadastro').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);

      cy.get('div').contains('Conta criada com sucesso. 😎').should('be.visible');
      cy.get('div').contains('Criamos sua conta para você.').should('be.visible');
    })
  })
})