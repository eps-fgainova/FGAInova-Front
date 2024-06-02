import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import Footer from '../../src/components/Footer'

describe('<Footer />', () => {
  const mock = {
    "titulo": "Titulo de Teste",
    "descricaoCurta": "Descrição de Teste",
    "tags": ['tag1', 'tag2'],
    "_id": "1",
    "pessoaId": "user-id",
  }
  it('Componente deve ter o texto "© 2024.1 UnB - ENGENHARIA DE PRODUTO DE SOFTWARE"', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Footer {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    );
    cy.get('p').contains("© 2024.1 UnB - ENGENHARIA DE PRODUTO DE SOFTWARE").should('be.visible');
  })
})