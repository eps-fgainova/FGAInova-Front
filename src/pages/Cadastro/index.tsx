/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { apiAuth } from "../../service";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function Cadastro() {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const { isAuthenticate } = useAuth();

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/perfil");
    }
  }, [isAuthenticate]);

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
      await apiAuth
        .post("/cliente", formData)
        .then(() => {
          toast({
            title: "Conta criada com sucesso. 😎",
            description: "Criamos sua conta para você.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-left",
          });
        })
        .then(() => {
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        });
    } catch (error) {
      const errorMessage = (error as { response: { data: { erro: string } } })
        .response.data.erro;
      toast({
        title: "Algo esta errado. 😥",
        description:
          errorMessage.length > 0 ? errorMessage : "Verifique os campos!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} py={12}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Iniciativas inovadoras{" "}
            <Text as={"span"} bgColor={"teal.400"} bgClip="text">
              para projetos
            </Text>{" "}
            universitários
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, teal.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, teal.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Cadastro
              <Text as={"span"} bg={"teal.500"} bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Não compartilhe sua senha com ninguém!
            </Text>
          </Stack>
          <Box as={"form"} mt={1} onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                placeholder="Nome completo"
                name="nome"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                value={formData.nome}
                onChange={handleChange}
              />
              <Input
                placeholder="seuemail@mail.com"
                name="email"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                name="senha"
                type="password"
                placeholder="Senha"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                value={formData.senha}
                onChange={handleChange}
              />
            </Stack>
            <Button
              type="submit"
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bg={"teal.400"}
              color={"white"}
              _hover={{
                bg: "teal.300",
                boxShadow: "xl",
              }}
            >
              Cadastrar
            </Button>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}
