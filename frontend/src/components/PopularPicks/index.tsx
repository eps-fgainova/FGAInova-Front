import {
  Box,
  Heading,
  Stack,
  Container,
  HStack,
  Button,
} from "@chakra-ui/react";
import CardPopularPicks from "../CardPopularPicks";
import { Link as LinkRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service";
import { IProjeto } from "../../Interface/Projeto";

export default function PopularPicks() {
  const [projetos, setProjetos] = useState<IProjeto[]>([]);

  useEffect(() => {
    api
      .get<IProjeto[]>("/projetos/top3")
      .then((res) => {
        // Atualize o estado com os dados recebidos da API
        setProjetos(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar projetos:", err);
      });
  }, []);

  return (
    <Box>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <HStack display={"flex"} justify={"space-between"}>
          <Heading>+ Acessados</Heading>
          <LinkRouter to={"/projetos"}>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"teal.400"}
              href={"#"}
              _hover={{
                bg: "teal.300",
              }}
            >
              + Projetos
            </Button>
          </LinkRouter>
        </HStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {projetos.map((projeto) => (
            <CardPopularPicks
              key={projeto._id}
              titulo={projeto.titulo}
              descricaoCurta={projeto.descricaoCurta}
              tags={projeto.tags}
              _id={projeto._id}
              pessoaId={projeto.pessoaId}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
