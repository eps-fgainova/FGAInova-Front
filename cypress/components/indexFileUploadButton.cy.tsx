import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import FileUploadButton from '../../src/components/FileUploadButton '

describe('<FileUploadButton />', () => {
  it('Botão de Enviar arquivo é exibido', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <FileUploadButton />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    cy.get('button').contains('Escolher Arquivos').click()
  })

  it('Imagem enviada com sucesso', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <FileUploadButton />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )
    
  })
})