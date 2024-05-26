import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  useColorModeValue,
  Container,
  FormControl,
  FormLabel,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast,
  SimpleGrid,
} from "@chakra-ui/react";
import api from "../../service";
import CardPopularPicks from "../../components/CardPopularPicks";
import { IProjeto } from "../../Interface/Projeto";

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

const Perfil = () => {
  const data = JSON.parse(sessionStorage.getItem("@user") || "");
  const token = JSON.parse(sessionStorage.getItem("@token") || "");
  const emailToPut = data?.email;

  const [show, setShow] = React.useState(false);
  const [projetos, setProjetos] = useState<IProjeto[]>([]);
  const handleClick = () => setShow(!show);
  const toast = useToast();


  const [formData, setFormData] = useState({
    nome: "",
    senha: "",
    email: "",
  });

  useEffect(() => {
    if (data._id && token) { // Verifique se `data._id` e `token` estão disponíveis
      api
        .get(`/cliente/${data._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const { nome, email, senha } = res.data;
          setFormData({
            nome: nome || "",
            senha: senha || "",
            email: email || "",
          });
        })
        .catch((err) => {
          console.error("Erro ao buscar dados do cliente:", err);
        });
    }
  }, [data._id, token]); // Adicione `data._id` e `token` como dependências do useEffect

  useEffect(() => {
    // Faça a solicitação à API para buscar os projetos
    api
      .get<IProjeto[]>("/projeto", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // Atualize o estado com os dados recebidos da API
        setProjetos(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar projetos:", err);
      });
  }, []); // 
  

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {      
      const response = await api
        .put(`/cliente/${emailToPut}`, formData, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return res;
        });

      if (response.status === 200) {
        toast({
          title: "Conta atualizada com sucesso. 😎",
          description: "Seus dados estão atualizados.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    } catch (error) {
      toast({
        title: "Algo esta errado. 😥",
        description: "Verifique os campos!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  // Fim do teste

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Perfil</Heading>
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
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&"
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
          <Heading>Editar Perfil</Heading>
          <Box maxW="md" mt={10}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="nome">
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl id="senha">
                  <FormLabel>Senha</FormLabel>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Senha com no minimo 6 caracteres"
                      minLength={6}
                      name="senha"
                      value={formData.senha}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "🙈" : "👁️"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  type="submit"
                  w={"100%"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"teal.400"}
                  _hover={{
                    bg: "teal.300",
                  }}
                >
                  Enviar
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
      <Divider marginTop="5" mt={"1rem"} />
      <Heading paddingTop="40px" as="h2">
        Meus Projetos
      </Heading>      
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {/* <CardPopularPicks />
        <CardPopularPicks />
        <CardPopularPicks />
        <CardPopularPicks />
        <CardPopularPicks />
        <CardPopularPicks /> */}
        {projetos.map((projeto) => (
          <CardPopularPicks
            key={projeto._id}
            titulo={projeto.titulo}
            descricaoCurta={projeto.descricaoCurta}
            _id={projeto._id}
          />
        ))}
      </SimpleGrid>
      <Button
        isLoading={false}
        w={"100%"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"teal.400"}
        _hover={{
          bg: "teal.300",
        }}
      >
        Carregar Mais
      </Button>
    </Container>
  );
};

export default Perfil;
