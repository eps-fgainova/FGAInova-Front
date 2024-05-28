import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" background="teal.400" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Sobre = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Sobre</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={["Produto", "Objetivos", "Metas"]} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Objetivos
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            O FGAInova se destaca como uma resposta à necessidade de fornecer
            uma plataforma dedicada à divulgação e ao apoio a projetos
            inovadores que possam fazer a diferença. Oferecendo uma plataforma
            centralizada para a promoção de ideias transformadoras desenvolvidas
            em ambiente universitário.
          </Text>          
        </Box>
      </Box>
      <Divider marginTop="5" />

      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">O Projeto</Heading>
        <Text textAlign={"justify"} as="p" fontSize="lg">
          O Projeto FGAInova visa criar uma plataforma de marketing digital
          dedicada a promover projetos de inovação desenvolvidos em ambiente
          universitário. Inspirado pela necessidade de destacar e divulgar esses
          projetos em um cenário altamente competitivo, a plataforma oferecerá
          uma maneira eficaz de conectar estudantes, pesquisadores e
          profissionais com ideias inovadoras e impactantes.
        </Text>
        <Text textAlign={"justify"} as="p" fontSize="lg">
          Em um ambiente universitário dinâmico, onde a criatividade e a
          inovação são constantemente incentivadas, o FGAInova surge como uma
          ferramenta essencial para impulsionar o reconhecimento e o sucesso
          desses projetos. Com a plataforma, pretendemos criar uma comunidade
          vibrante e colaborativa, onde ideias promissoras possam ser
          compartilhadas, discutidas e promovidas para um público mais amplo.
        </Text>
        <Text textAlign={"justify"} as="p" fontSize="lg">
          O FGAInova se destaca como uma resposta à necessidade de fornecer uma
          plataforma dedicada à divulgação e ao apoio a projetos inovadores que
          possam fazer a diferença. Oferecendo uma plataforma centralizada para
          a promoção de ideias transformadoras desenvolvidas em ambiente
          universitário.
        </Text>
      </VStack>
    </Container>
  );
};

export default Sobre;
