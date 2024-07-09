/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Text,
} from "@chakra-ui/react";
import { MultiValue, Select as SelectTag } from "chakra-react-select";
import { IProjeto } from "../../Interface/Projeto";
import { useEffect, useState } from "react";
import { api } from "../../service";
import CardPopularPicks from "../../components/CardPopularPicks";
import useDebounce from "../../utils/useDebounce";
import BGImage from "../../assets/bannerProjetos.png";
import { TagData } from "../../components/InputTag";
import Ghost from "../../assets/Linear.svg";

export default function Projetos() {
  const [projetos, setProjetos] = useState<IProjeto[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const [tags, setTags] = useState<TagData[]>([]);
  const debouncedTitulo = useDebounce(titulo, 500); // Debounce com 500ms de atraso
  const debouncedTags = useDebounce(tags, 500); // Debounce com 500ms de atraso
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
  // Função para tratar os valores de tags em formato adequado para a query
  const formatTagsForQuery = (tags: any[]) => {
    if (!tags || tags.length === 0) {
      return "";
    }
    return tags.map((tag) => tag.value).join(",");
  };

  useEffect(() => {
    // Busca os projetos com base no título do input após debouncing
    if (debouncedTitulo || debouncedTags) {      
      setIsLoading(true);
      const tagsQuery = formatTagsForQuery(debouncedTags as any[]);

      api
        .get<IProjeto[]>(
          `/projetos/all?titulo=${debouncedTitulo}&tags=${tagsQuery}`
        )
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
  }, [debouncedTitulo, debouncedTags, tags]);

  const handleSearch = () => {
    const tagsQuery = formatTagsForQuery(debouncedTags as any[]);
    setIsLoading(true);
    api
      .get<IProjeto[]>(`/projetos/all?titulo=${titulo}&tags=${tagsQuery}`)
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

  // Select
  const projectCategories = [
    { value: "tecnologia", label: "Tecnologia", color: "#007BFF" }, // Azul vibrante
    { value: "educacao", label: "Educação", color: "#6F42C1" }, // Roxo
    { value: "saude", label: "Saúde", color: "#D6336C" }, // Rosa avermelhado
    { value: "energia", label: "Energia", color: "#FD7E14" }, // Laranja
    { value: "meio-ambiente", label: "Meio Ambiente", color: "#28A745" }, // Verde
    { value: "financas", label: "Finanças", color: "#FFC107" }, // Amarelo
    { value: "mobilidade", label: "Mobilidade", color: "#6610F2" }, // Roxo mais escuro
    { value: "agritech", label: "AgriTech", color: "#20C997" }, // Verde claro
    { value: "biotecnologia", label: "Biotecnologia", color: "#E83E8C" }, // Rosa forte
    {
      value: "inteligencia-artificial",
      label: "Inteligência Artificial",
      color: "#6C757D",
    }, // Cinza médio
    {
      value: "empreendedorismo-social",
      label: "Empreendedorismo Social",
      color: "#17A2B8",
    }, // Azul claro
    { value: "design", label: "Design", color: "#E0A800" }, // Amarelo ouro
    { value: "engenharia", label: "Engenharia", color: "#DC3545" }, // Vermelho
    { value: "biomedicina", label: "Biomedicina", color: "#343A40" }, // Cinza escuro
    { value: "ciencia-dados", label: "Ciência de Dados", color: "#00B8D9" }, // Ciano
  ];

  const mappedColourOptions = projectCategories.map((option) => ({
    value: option.value,
    label: option.label,
    color: option.color,
  }));

  const chakraStyles = {
    multiValue: (provided: any, state: { data: { color: any } }) => {
      const color = state.data.color;
      return {
        ...provided,
        backgroundColor: color,
        color: "white",
      };
    },
    multiValueLabel: (provided: any) => {      
      
      return {
        ...provided,
        color: "white",
      };
    },
    multiValueRemove: (provided: any, state: { data: { color: any } }) => {
      const color = state.data.color;
      return {
        ...provided,
        color: "white",
        ":hover": {
          backgroundColor: color,
          color: "white",
        },
      };
    },
  };

  const handleTagChange = (newTags: TagData[]) => {    
    setTags(newTags);
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
          // overflow={"hidden"}
          direction={{ base: "column", md: "column" }}
          // gap={"1rem"}
          // alignItems={{ base: "center", md: "flex-start" }}
        >
          <Flex
            // direction={{ base: "column", md: "row" }}
            // alignItems={{ base: "center", md: "flex-start" }}
            mb="1rem"
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
          <SelectTag
            isMulti
            name="colors"
            options={mappedColourOptions}
            placeholder="Tag para categorizar seu projeto..."
            closeMenuOnSelect={false}
            value={tags as MultiValue<{ color: any; }> | undefined}
            onChange={(e) => handleTagChange(e as unknown as TagData[])}
            size="sm"
            chakraStyles={chakraStyles}
          />
        </Flex>
        {isLoading ? (
          <Flex
            width={"full"}
            height={"300px"}
            justifyContent={"center"}
            flexDirection="column"
            alignItems={"center"}
            position={"initial"}
          >
            <Spinner color="teal" size="xl" />
          </Flex>
        ) : projetos.length === 0 ? (
          <Flex
            width={"full"}
            height={"300px"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"initial"}
          >
            <Image boxSize="60px" src={Ghost} alt="" />
            <Text>Nenhum projeto encontrado.</Text>
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
