import {
  Container,
  Flex,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Button,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { IProjeto } from "../../Interface/Projeto";
import { useEffect, useState } from "react";
import { api } from "../../service";
import CardPopularPicks from "../../components/CardPopularPicks";
import useDebounce from "../../utils/useDebounce";
import BGImage from "../../assets/bannerProjetos.png";

export default function Projetos() {
  const [projetos, setProjetos] = useState<IProjeto[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const debouncedTitulo = useDebounce(titulo, 500); // Debounce com 500ms de atraso
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Busca inicial para carregar todos os projetos
    api
      .get<IProjeto[]>("/projetos/all")
      .then((res) => {
        setProjetos(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar projetos:", err);
      });
  }, []);

  useEffect(() => {
    // Busca os projetos com base no título do input após debouncing
    if (debouncedTitulo) {
      setIsLoading(true);
      api
        .get<IProjeto[]>(`/projetos/all?titulo=${debouncedTitulo}`)
        .then((res) => {
          setProjetos(res.data);
        })
        .catch((err) => {
          console.error("Erro ao buscar projetos:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      // Caso o input esteja vazio, carrega todos os projetos
      setIsLoading(true);
      api
        .get<IProjeto[]>("/projetos/all")
        .then((res) => {
          setProjetos(res.data);
        })
        .catch((err) => {
          console.error("Erro ao buscar projetos:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [debouncedTitulo]);

  const handleSearch = () => {
    setIsLoading(true);
    api
      .get<IProjeto[]>(`/projetos/all?titulo=${titulo}`)
      .then((res) => {
        setProjetos(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar projetos:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Flex justifyContent={"center"} alignItems={"center"} position="relative">
        <Image width={"100%"} src={BGImage} alt="Projetos" />
        <Heading color={"white"} position={"absolute"} fontSize={"48px"}>
          Projetos
        </Heading>
      </Flex>
      <Container maxW={"7xl"} p="12">
        <Flex
          mb="8"
          justifyContent="center"
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Buscar projetos"
            width={{ base: "100%", md: "80%" }}
            mr={{ base: 0, md: "4" }}
            mb={{ base: "4", md: 0 }}
          />

          <Button
            w={{ base: "100%", md: "20%" }}
            display={{ base: "flex", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"teal.400"}
            _hover={{
              bg: "teal.300",
            }}
            onClick={handleSearch}
            isLoading={isLoading}
          >
            Buscar
          </Button>
        </Flex>
        {isLoading ? (
          <Flex
            width={"full"}
            height={"300px"}            
            justifyContent={"center"}
            alignItems={"center"}
            position={"initial"}
          >
            <Spinner color="teal" size="xl" />
          </Flex>
        ) : (
          <SimpleGrid columns={[1, null, 2, 3]} spacing="40px">
            {projetos.map((projeto) => (
              <CardPopularPicks
                key={projeto._id}
                titulo={projeto.titulo}
                descricaoCurta={projeto.descricaoCurta}
                banner={projeto.bannerUrl}
                tags={projeto.tags}
                _id={projeto._id}
                pessoaId={projeto.pessoaId}
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}
