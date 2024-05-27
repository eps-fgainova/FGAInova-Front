import { Container, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { IProjeto } from "../../Interface/Projeto";
import { useEffect, useState } from "react";
import api from "../../service";
import CardPopularPicks from "../../components/CardPopularPicks";

export default function Projetos() {
  const [projetos, setProjetos] = useState<IProjeto[]>([]);

  useEffect(() => {
    api
      .get<IProjeto[]>("/projetos/all")
      .then((res) => {
        // Atualize o estado com os dados recebidos da API
        setProjetos(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar projetos:", err);
      });
  }, []);

  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Image src="../src/assets/bannerProjetos.png" alt="Projetos" />
        <Heading color={"white"} position={"fixed"} fontSize={"48px"}>
          Projetos
        </Heading>
      </Flex>
      <Container maxW={"7xl"} p="12">
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
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
        </SimpleGrid>
      </Container>
    </>
  );
}
