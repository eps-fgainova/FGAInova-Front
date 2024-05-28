import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Link, Tag, VStack, HStack, Container } from '@chakra-ui/react';
import { IProjeto } from '../../Interface/Projeto';
import api from '../../service';

const ProjetoView = () => {
  const { id } = useParams();
  const [projeto, setProjeto] = useState<IProjeto>();

useEffect(() => {
    const fetchProjeto = async () => {
        // Substitua pela URL correta da sua API
        const response = await api.get(`/projetos/public/${id}`);
        const data = await response.data;
        setProjeto(data);
    };

    fetchProjeto();
}, [id]);

if (!projeto) {
    return <Text>Loading...</Text>;
}

  return (
    <Container maxW={"7xl"} p="12" minH={"100vh"} >
      <Heading mb={4}>{projeto.titulo}</Heading>
      {/* <Text mb={4}>{projeto.descricaoCurta}</Text> */}
      <Text textAlign={"justify"} mb={4}>{projeto.descricao}</Text>
      <VStack align="start" mb={4}>
        {projeto.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </VStack>
      <HStack spacing={4}>
        {projeto.linksRedesSociais.facebook && (
          <Link href={projeto.linksRedesSociais.facebook} isExternal>
            Facebook
          </Link>
        )}
        {projeto.linksRedesSociais.twitter && (
          <Link href={projeto.linksRedesSociais.twitter} isExternal>
            Twitter
          </Link>
        )}
        {projeto.linksRedesSociais.instagram && (
          <Link href={projeto.linksRedesSociais.instagram} isExternal>
            Instagram
          </Link>
        )}
        {projeto.linksRedesSociais.linkedin && (
          <Link href={projeto.linksRedesSociais.linkedin} isExternal>
            LinkedIn
          </Link>
        )}
        {projeto.linksRedesSociais.youtube && (
          <Link href={projeto.linksRedesSociais.youtube} isExternal>
            YouTube
          </Link>
        )}
      </HStack>
      {projeto.linkVideo && (
        <Box mt={4}>
          <Text>Link do vídeo:</Text>
          <Link href={projeto.linkVideo} isExternal>
            {projeto.linkVideo}
          </Link>
        </Box>
      )}
    </Container>
  );
};

export default ProjetoView;
