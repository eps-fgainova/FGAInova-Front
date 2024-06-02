import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import Login from '../../src/pages/Login'

describe('<Home />', () => {

  it('Login efetuado com sucesso', () => {
    cy.intercept('POST', '/signin', {
      statusCode: 200,
      body: {
        "pessoa": {
          "_id": "664d44c44a7b6d961cd0a550",
          "nome": "PEDRO MOEADAS",
          "email": "petercoin@mail.com",
          "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGQ0NGM0NGE3YjZkOTYxY2QwYTU1MCIsInRpcG8iOiJDbGllbnRlIiwiaWF0IjoxNzE3Mjk3MjQ5LCJleHAiOjE3MTczODM2NDl9.kTxw9RsvACpcdc6yoWAch9DDcxb5_7zh11ELRU5MX5Y"
      }
    }).as('postCadastro');

    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Login />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )

    cy.get('input[placeholder="seuemail@mail.com"]').type('mockersonsilva@mail.com');
    cy.get('input[placeholder="Senha"]').type('m0ck$on$|lv4');
    cy.get('.chakra-button').click()
  })
})