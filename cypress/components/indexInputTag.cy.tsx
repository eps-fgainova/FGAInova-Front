import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import InputTag from '../../src/components/InputTag'

describe('<InputTag />', () => {
  
  it('Adiciona "TAG1" e a tag é criada', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <InputTag />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('input').type("TAG1{enter}");
    cy.get('span').contains("TAG1").should('be.visible');
  })
})