import { ChakraProvider } from '@chakra-ui/react';
import { BlogAuthor } from '../../src/pages/Perfil'

describe('<BlogAuthor />', () => {
  const mock = {
    authorName: "Mockerson Silva",
    date: new Date(2024, 6, 1)
  }
  it('renders', () => {
    cy.mount(
      <ChakraProvider>
        <BlogAuthor {...mock} />
      </ChakraProvider>
    );
    cy.get('img').should('have.attr', 'src').and('include', 'random-image');
    cy.contains(mock.date.toLocaleDateString()).should('be.visible');
  });
})