import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../../src/context/AuthContext';
import ProjetoView from '../../src/pages/ProjetoView'

describe('CardPopularPicks Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/projeto/6652841b09783f11c4b790f8', {
      statusCode: 200,
      body: {
        "linksRedesSociais": {
          "facebook": "teste Facebook",
          "twitter": "",
          "instagram": "",
          "linkedin": "",
          "youtube": "",
          "site": "undefined"
        },
        "_id": "6652841b09783f11c4b790f8",
        "titulo": "Teste Projeto 1🤨🤨🤨",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem id justo hendrerit lacinia in non augue. Aliquam in lacinia erat, ac consequat nisl. Nulla tincidunt, nibh a egestas facilisis, sem leo iaculis nisi, nec congue ante tellus sed quam. Suspendisse pellentesque neque at erat faucibus ultricies. Etiam malesuada libero nec mauris interdum suscipit. Etiam eget suscipit libero. Mauris semper lacus mauris, vel vehicula arcu tempus ac. Nunc nulla diam, gravida et quam eget, suscipit lobortis eros. Nullam aliquet eros in metus porttitor, eu consequat mauris bibendum. Nullam risus augue, lobortis sodales nisl et, imperdiet suscipit sapien. Pellentesque rhoncus tincidunt commodo. Pellentesque placerat urna at tincidunt vestibulum. Nam ultricies blandit dolor non cursus. Vivamus condimentum, nisl at sagittis dapibus, mi nisi rutrum elit, ut varius erat urna quis nibh.",
        "descricaoCurta": "Aenean fringilla dolor in aliquam auctor. Etiam pulvinar tincidunt odio. Duis mi lectus, tristique vel luctus a, fermentum hendrerit ligula. Integer sit amet iaculis dolor, vel facilisis metus. Suspendisse at egestas metus, ut pellentesque massa. Integer pretium ultricies mauris vel tempus. Morbi tincidunt ipsum ligula, et varius quam tristique id.",
        "linkVideo": "https://www.youtube.com/watch?v=rog8ou-ZepE",
        "pessoaId": "664d44c44a7b6d961cd0a550",
        "__v": 3,
        "tags": [
          "Tecnologia",
          "Finanças"
        ],
        "bannerUrl": "https://res.cloudinary.com/dzsy3q6bi/image/upload/v1717272141/projetos/banners/Captura%20de%20tela%202023-12-20%20105413.png.png",
        "imagens": [],
        "logoUrl": "https://res.cloudinary.com/dzsy3q6bi/image/upload/v1717263816/projetos/logos/logo.png.png"
      }
    }).as('fetchProjeto');

    cy.mount(
      <ChakraProvider>
        <Router>
          <ProjetoView useParams={() => ({ id: '6652841b09783f11c4b790f8' })} />
        </Router>
      </ChakraProvider>
    );
  })

  it('Componente deve ter o título de acordo com mock', () => {
    // cy.wait('@fetchProjeto')

  });
})