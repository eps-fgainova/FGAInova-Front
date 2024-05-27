/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Flex,
  useToast,
} from "@chakra-ui/react";
import api from "../../service";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { AxiosResponse } from "axios";
// AxiosError
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { setUser, setIsAuthenticate, isAuthenticate } = useAuth();
  const toast = useToast();

  interface ErroRequest extends AxiosResponse<unknown, unknown> {
    response: {
      data: {
        erro: string;
      };
      status: number;
      statusText: string;
      headers: unknown;
      config: unknown;
    };
  }

  useEffect(() => {
    if (isAuthenticate) {
      navigate("/perfil");
    }
  }, [isAuthenticate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      email,
      senha,
    };

    try {
      const response = await api.post("/signin", data).then((res) => {
        return res;
      });
      if (response.status === 200) {
        sessionStorage.setItem(
          "@user",
          JSON.stringify({
            ...response.data.pessoa,
            funcao: "Cliente",
          })
        );
        sessionStorage.setItem("@token", JSON.stringify(response.data.token));
        setUser({
          ...response.data,
          funcao: "Cliente",
        });
        setIsAuthenticate(true);
      }
    } catch (error) {
      const { response } = error as ErroRequest;      
      toast({
        title: "Algo esta errado. 😥",
        description: response?.data.erro
          ? response?.data.erro
          : "Ocorreu um erro! 🤨",
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
        spacing={{ base: 10, lg: 32 }}
        flexDirection={"row"}
        justifyContent={"center"}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
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
              Login
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
                placeholder="seuemail@mail.com"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Senha"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
              Entrar
            </Button>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}
