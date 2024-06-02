import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../src/context/AuthContext';
import { Home } from '../../src/pages/Home'

describe('<Home />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/projetos/top3', {
      statusCode: 200,
      body: [
        {
          "linksRedesSociais": {
            "facebook": "teste Facebook",
            "twitter": "",
            "instagram": "",
            "linkedin": "",
            "youtube": ""
          },
          "_id": "6652841b09783f11c4b790f8",
          "titulo": "Teste Projeto 1🤨🤨🤨",
          "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in sem id justo hendrerit lacinia in non augue. Aliquam in lacinia erat, ac consequat nisl. Nulla tincidunt, nibh a egestas facilisis, sem leo iaculis nisi, nec congue ante tellus sed quam. Suspendisse pellentesque neque at erat faucibus ultricies. Etiam malesuada libero nec mauris interdum suscipit. Etiam eget suscipit libero. Mauris semper lacus mauris, vel vehicula arcu tempus ac. Nunc nulla diam, gravida et quam eget, suscipit lobortis eros. Nullam aliquet eros in metus porttitor, eu consequat mauris bibendum. Nullam risus augue, lobortis sodales nisl et, imperdiet suscipit sapien. Pellentesque rhoncus tincidunt commodo. Pellentesque placerat urna at tincidunt vestibulum. Nam ultricies blandit dolor non cursus. Vivamus condimentum, nisl at sagittis dapibus, mi nisi rutrum elit, ut varius erat urna quis nibh.",
          "descricaoCurta": "Aenean fringilla dolor in aliquam auctor. Etiam pulvinar tincidunt odio. Duis mi lectus, tristique vel luctus a, fermentum hendrerit ligula. Integer sit amet iaculis dolor, vel facilisis metus. Suspendisse at egestas metus, ut pellentesque massa. Integer pretium ultricies mauris vel tempus. Morbi tincidunt ipsum ligula, et varius quam tristique id.",
          "linkVideo": "https://www.youtube.com/watch?v=rog8ou-ZepE",
          "pessoaId": "664d44c44a7b6d961cd0a550",
          "__v": 2,
          "tags": [
            "Tecnologia",
            "Finanças"
          ]
        },
        {
          "linksRedesSociais": {
            "facebook": "",
            "twitter": "",
            "instagram": "",
            "linkedin": "",
            "youtube": ""
          },
          "_id": "6652a03bef635071202106a3",
          "titulo": "Teste Projeto 2",
          "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a quam vitae ante gravida porta non et nibh. Quisque varius, leo et finibus rhoncus, dui eros dapibus magna, ut semper diam arcu in purus. Vestibulum mattis eget lacus non tempus. Nam nec ligula ac metus rutrum elementum. Sed nec faucibus massa, eu rhoncus sapien. In tincidunt sed lacus et sagittis. Suspendisse fermentum ante sed bibendum pellentesque. Curabitur eros mi, dignissim at quam nec, fringilla posuere nibh. Cras dui eros, tincidunt et accumsan in, suscipit vitae lectus.\n\nAliquam vitae rutrum risus. Fusce porttitor nunc est, ut congue tortor pulvinar ac. Sed magna dui, egestas eu rhoncus nec, aliquam in lorem. Sed at neque lobortis, auctor est at, auctor odio. Quisque vitae odio euismod, auctor erat quis, maximus tortor. Integer vel justo sit amet dui ultrices pretium. Maecenas porttitor mi sit amet metus feugiat gravida. Nulla viverra tempor enim, tincidunt hendrerit turpis eleifend at. Praesent vulputate non est non ultricies.\n\nEtiam a dapibus magna, sed tincidunt purus. Duis eget aliquam felis. Sed sollicitudin ligula quis neque rhoncus venenatis. Maecenas dapibus id est non iaculis. Pellentesque venenatis, ligula ut aliquet malesuada, augue justo vestibulum mauris, vel ultricies sapien felis eget augue. Pellentesque placerat vehicula orci blandit interdum. Proin gravida sollicitudin lacinia. Mauris fermentum lacinia aliquet. Aliquam porttitor tellus varius nisl auctor, eget imperdiet tellus laoreet. Suspendisse risus ligula, fermentum quis mollis vel, dapibus sed arcu.\n\nPhasellus blandit lacus ac nisl porta, sit amet ullamcorper lacus sollicitudin. Cras blandit ligula et orci lobortis sagittis. Quisque volutpat diam vitae tellus hendrerit pretium. Cras at augue eget tellus hendrerit condimentum eu ac risus. Duis malesuada mauris at dolor vulputate malesuada. Donec facilisis at lectus id euismod. In magna diam, dictum id metus placerat, rutrum dapibus erat. Quisque sodales libero id ullamcorper sodales. Nam ac volutpat dolor. Duis ac venenatis nulla. Suspendisse condimentum velit diam, vitae aliquam erat posuere in.\n\nMaecenas at magna placerat erat cursus scelerisque. Nullam posuere laoreet leo vitae efficitur. Aliquam ut lacus sollicitudin, placerat tellus in, venenatis ligula. Nullam venenatis ante tincidunt, fermentum massa at, hendrerit arcu. Morbi et gravida mi, vel scelerisque erat. Nulla ac risus in purus pretium consequat. Etiam efficitur massa risus, nec vestibulum purus interdum at. Morbi sit amet odio rhoncus, porta purus non, feugiat lacus. Nunc volutpat ante id libero elementum, ornare dictum dui commodo. Fusce eget feugiat nunc, eget cursus ligula. Vivamus eleifend malesuada neque et posuere. Maecenas commodo justo vitae orci pretium ultricies.",
          "descricaoCurta": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a quam vitae ante gravida porta non et nibh. Quisque varius, leo et finibus rhoncus, dui eros dapibus magna, ut semper diam arcu in purus. Vestibulum mattis eget lacus non tempus. Nam nec ligula ac metus rutrum elementum. Sed nec faucibus massa, eu rhoncus sapien. In tincidunt sed lacus et sagittis. Suspendisse fermentum ante sed bibendum pellentesque. Curabitur eros mi, dignissim at quam nec, fringilla posuere nibh. Cras dui eros, tincidunt et accumsan in, suscipit vitae lectus.\n\nAliquam vitae rutrum risus. Fusce porttitor nunc est, ut congue tortor pulvinar ac. Sed magna dui, egestas eu rhoncus nec, aliquam in lorem. Sed at neque lobortis, auctor est at, auctor odio. Quisque vitae odio euismod, auctor erat quis, maximus tortor. Integer vel justo sit amet dui ultrices pretium. Maecenas porttitor mi sit amet metus feugiat gravida. Nulla viverra tempor enim, tincidunt hendrerit turpis eleifend at. Praesent vulputate non est non ultricies.\n\nEtiam a dapibus magna, sed tincidunt purus. Duis eget aliquam felis. Sed sollicitudin ligula quis neque rhoncus venenatis. Maecenas dapibus id est non iaculis. Pellentesque venenatis, ligula ut aliquet malesuada, augue justo vestibulum mauris, vel ultricies sapien felis eget augue. Pellentesque placerat vehicula orci blandit interdum. Proin gravida sollicitudin lacinia. Mauris fermentum lacinia aliquet. Aliquam porttitor tellus varius nisl auctor, eget imperdiet tellus laoreet. Suspendisse risus ligula, fermentum quis mollis vel, dapibus sed arcu.\n\nPhasellus blandit lacus ac nisl porta, sit amet ullamcorper lacus sollicitudin. Cras blandit ligula et orci lobortis sagittis. Quisque volutpat diam vitae tellus hendrerit pretium. Cras at augue eget tellus hendrerit condimentum eu ac risus. Duis malesuada mauris at dolor vulputate malesuada. Donec facilisis at lectus id euismod. In magna diam, dictum id metus placerat, rutrum dapibus erat. Quisque sodales libero id ullamcorper sodales. Nam ac volutpat dolor. Duis ac venenatis nulla. Suspendisse condimentum velit diam, vitae aliquam erat posuere in.\n\nMaecenas at magna placerat erat cursus scelerisque. Nullam posuere laoreet leo vitae efficitur. Aliquam ut lacus sollicitudin, placerat tellus in, venenatis ligula. Nullam venenatis ante tincidunt, fermentum massa at, hendrerit arcu. Morbi et gravida mi, vel scelerisque erat. Nulla ac risus in purus pretium consequat. Etiam efficitur massa risus, nec vestibulum purus interdum at. Morbi sit amet odio rhoncus, porta purus non, feugiat lacus. Nunc volutpat ante id libero elementum, ornare dictum dui commodo. Fusce eget feugiat nunc, eget cursus ligula. Vivamus eleifend malesuada neque et posuere. Maecenas commodo justo vitae orci pretium ultricies.",
          "linkVideo": "https://www.youtube.com/watch?v=1lyu1KKwC74",
          "pessoaId": "664d44c44a7b6d961cd0a550",
          "__v": 1,
          "tags": [
            "Educação",
            "Segurança"
          ]
        },
        {
          "linksRedesSociais": {
            "facebook": "",
            "twitter": "",
            "instagram": "",
            "linkedin": "",
            "youtube": ""
          },
          "_id": "6652a32d09b45faa3f111f23",
          "titulo": "Projeto 007",
          "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a quam vitae ante gravida porta non et nibh. Quisque varius, leo et finibus rhoncus, dui eros dapibus magna, ut semper diam arcu in purus. Vestibulum mattis eget lacus non tempus. Nam nec ligula ac metus rutrum elementum. Sed nec faucibus massa, eu rhoncus sapien. In tincidunt sed lacus et sagittis. Suspendisse fermentum ante sed bibendum pellentesque. Curabitur eros mi, dignissim at quam nec, fringilla posuere nibh. Cras dui eros, tincidunt et accumsan in, suscipit vitae lectus.\n\nAliquam vitae rutrum risus. Fusce porttitor nunc est, ut congue tortor pulvinar ac. Sed magna dui, egestas eu rhoncus nec, aliquam in lorem. Sed at neque lobortis, auctor est at, auctor odio. Quisque vitae odio euismod, auctor erat quis, maximus tortor. Integer vel justo sit amet dui ultrices pretium. Maecenas porttitor mi sit amet metus feugiat gravida. Nulla viverra tempor enim, tincidunt hendrerit turpis eleifend at. Praesent vulputate non est non ultricies.\n\nEtiam a dapibus magna, sed tincidunt purus. Duis eget aliquam felis. Sed sollicitudin ligula quis neque rhoncus venenatis. Maecenas dapibus id est non iaculis. Pellentesque venenatis, ligula ut aliquet malesuada, augue justo vestibulum mauris, vel ultricies sapien felis eget augue. Pellentesque placerat vehicula orci blandit interdum. Proin gravida sollicitudin lacinia. Mauris fermentum lacinia aliquet. Aliquam porttitor tellus varius nisl auctor, eget imperdiet tellus laoreet. Suspendisse risus ligula, fermentum quis mollis vel, dapibus sed arcu.\n\nPhasellus blandit lacus ac nisl porta, sit amet ullamcorper lacus sollicitudin. Cras blandit ligula et orci lobortis sagittis. Quisque volutpat diam vitae tellus hendrerit pretium. Cras at augue eget tellus hendrerit condimentum eu ac risus. Duis malesuada mauris at dolor vulputate malesuada. Donec facilisis at lectus id euismod. In magna diam, dictum id metus placerat, rutrum dapibus erat. Quisque sodales libero id ullamcorper sodales. Nam ac volutpat dolor. Duis ac venenatis nulla. Suspendisse condimentum velit diam, vitae aliquam erat posuere in.\n\nMaecenas at magna placerat erat cursus scelerisque. Nullam posuere laoreet leo vitae efficitur. Aliquam ut lacus sollicitudin, placerat tellus in, venenatis ligula. Nullam venenatis ante tincidunt, fermentum massa at, hendrerit arcu. Morbi et gravida mi, vel scelerisque erat. Nulla ac risus in purus pretium consequat. Etiam efficitur massa risus, nec vestibulum purus interdum at. Morbi sit amet odio rhoncus, porta purus non, feugiat lacus. Nunc volutpat ante id libero elementum, ornare dictum dui commodo. Fusce eget feugiat nunc, eget cursus ligula. Vivamus eleifend malesuada neque et posuere. Maecenas commodo justo vitae orci pretium ultricies.",
          "descricaoCurta": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a quam vitae ante gravida porta non et nibh. Quisque varius, leo et finibus rhoncus, dui eros dapibus magna, ut semper diam arcu in purus. Vestibulum mattis eget lacus non tempus. Nam nec ligula ac metus rutrum elementum. Sed nec faucibus massa, eu rhoncus sapien. In tincidunt sed lacus et sagittis. Suspendisse fermentum ante sed bibendum pellentesque. Curabitur eros mi, dignissim at quam nec, fringilla posuere nibh. Cras dui eros, tincidunt et accumsan in, suscipit vitae lectus.\n\nAliquam vitae rutrum risus. Fusce porttitor nunc est, ut congue tortor pulvinar ac. Sed magna dui, egestas eu rhoncus nec, aliquam in lorem. Sed at neque lobortis, auctor est at, auctor odio. Quisque vitae odio euismod, auctor erat quis, maximus tortor. Integer vel justo sit amet dui ultrices pretium. Maecenas porttitor mi sit amet metus feugiat gravida. Nulla viverra tempor enim, tincidunt hendrerit turpis eleifend at. Praesent vulputate non est non ultricies.\n\nEtiam a dapibus magna, sed tincidunt purus. Duis eget aliquam felis. Sed sollicitudin ligula quis neque rhoncus venenatis. Maecenas dapibus id est non iaculis. Pellentesque venenatis, ligula ut aliquet malesuada, augue justo vestibulum mauris, vel ultricies sapien felis eget augue. Pellentesque placerat vehicula orci blandit interdum. Proin gravida sollicitudin lacinia. Mauris fermentum lacinia aliquet. Aliquam porttitor tellus varius nisl auctor, eget imperdiet tellus laoreet. Suspendisse risus ligula, fermentum quis mollis vel, dapibus sed arcu.\n\nPhasellus blandit lacus ac nisl porta, sit amet ullamcorper lacus sollicitudin. Cras blandit ligula et orci lobortis sagittis. Quisque volutpat diam vitae tellus hendrerit pretium. Cras at augue eget tellus hendrerit condimentum eu ac risus. Duis malesuada mauris at dolor vulputate malesuada. Donec facilisis at lectus id euismod. In magna diam, dictum id metus placerat, rutrum dapibus erat. Quisque sodales libero id ullamcorper sodales. Nam ac volutpat dolor. Duis ac venenatis nulla. Suspendisse condimentum velit diam, vitae aliquam erat posuere in.\n\nMaecenas at magna placerat erat cursus scelerisque. Nullam posuere laoreet leo vitae efficitur. Aliquam ut lacus sollicitudin, placerat tellus in, venenatis ligula. Nullam venenatis ante tincidunt, fermentum massa at, hendrerit arcu. Morbi et gravida mi, vel scelerisque erat. Nulla ac risus in purus pretium consequat. Etiam efficitur massa risus, nec vestibulum purus interdum at. Morbi sit amet odio rhoncus, porta purus non, feugiat lacus. Nunc volutpat ante id libero elementum, ornare dictum dui commodo. Fusce eget feugiat nunc, eget cursus ligula. Vivamus eleifend malesuada neque et posuere. Maecenas commodo justo vitae orci pretium ultricies.",
          "linkVideo": "https://www.youtube.com/watch?v=rs6Y4kZ8qtw",
          "tags": [
            "FinTeach",
            "Muggle",
            "Faria Lima"
          ],
          "pessoaId": "664d44c44a7b6d961cd0a550",
          "__v": 1
        }
      ]
    }).as('getTop3Projetos');
  })

  it('Verifica título dos projetos + acessados', () => {
    cy.mount(
      <Router>
        <ChakraProvider>
          <AuthProvider>
            <Home />
          </AuthProvider>
        </ChakraProvider>
      </Router>
    )

    cy.get('h2').contains('Teste Projeto 1🤨🤨🤨').should('be.visible')
    cy.get('h2').contains('Teste Projeto 2').should('be.visible')
    cy.get('h2').contains('Projeto 007').should('be.visible')
  })
})