import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import CardPopularPicks from '../../src/components/CardPopularPicks';

describe('CardPopularPicks Component', () => {
  const mock = {
    "titulo": "Titulo de Teste",
    "descricaoCurta": "Descrição de Teste",
    "tags": ['tag1', 'tag2'],
    "_id": "1",
    "pessoaId": "user-id",
  }
  it('Componente deve ter o título de acordo com mock', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <CardPopularPicks {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    );
    cy.get('h2').contains(mock.titulo).should('be.visible');
    cy.get('p').contains(mock.descricaoCurta).should('be.visible');
  });

  it('Componente deve ter a descrição de acordo com mock', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <CardPopularPicks {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    );
    cy.get('p').contains(mock.descricaoCurta).should('be.visible');
  });

  it('Componente deve ter as tags de acordo com mock', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <CardPopularPicks {...mock} />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    );
    for (const tag in mock.tags) {
      cy.get('p').contains(tag).should('be.visible');
    }

  });



});
