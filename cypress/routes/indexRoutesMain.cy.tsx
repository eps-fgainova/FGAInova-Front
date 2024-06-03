import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ProjetoView from '../../src/pages/ProjetoView';
import { AuthProvider } from '../../src/context/AuthContext';

describe('Roteamento do ProjetoView', () => {
  it('deve montar o componente ProjetoView com roteamento', () => {
    const mockUseParams = () => ({ id: '6652841b09783f11c4b790f8' });

    cy.mount(
      <ChakraProvider>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/projeto/:id" element={<ProjetoView useParams={mockUseParams} />} />
            </Routes>
          </AuthProvider>
        </Router>
      </ChakraProvider>
    );
  });
});