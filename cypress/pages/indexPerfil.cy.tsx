import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import Perfil from '../../src/pages/Perfil'

describe('<Perfil />', () => {
  beforeEach(() => {
    cy.mount(<Router>
      <ChakraProvider>
        <AuthProvider>
          <Perfil />
        </AuthProvider>
      </ChakraProvider>
    </Router>)
  })
  it('renders', () => {

  })
})