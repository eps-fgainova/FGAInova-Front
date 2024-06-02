import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import CreateProjectForm from '../../src/pages/NovoProjeto'

describe('<CreateProjectForm />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <CreateProjectForm />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
  })
})