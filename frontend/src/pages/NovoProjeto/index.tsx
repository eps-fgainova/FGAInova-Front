import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  ChakraProvider,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  InputGroup,
  InputLeftElement,
  Container,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import api from "../../service";
import InputTag, { TagData } from "../../components/InputTag";

const CreateProjectForm: React.FC = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [descricaoCurta, setDescricaoCurta] = useState<string>("");
  const [linksRedesSociais, setLinksRedesSociais] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });
  const [linkVideo, setLinkVideo] = useState<string>("");
  const [tags, setTags] = useState<TagData[]>([]);
  const token = JSON.parse(sessionStorage.getItem("@token") || "");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLinksRedesSociais((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTagChange = (newTags: TagData[]) => {
    setTags(newTags);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      titulo,
      descricao,
      descricaoCurta,
      linksRedesSociais,
      linkVideo,
      tags: tags.map((tag) => tag.text),
    };

    try {
      await api
        .post("/projeto", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          // Limpa o formulário após o envio
          setTitulo("");
          setDescricao("");
          setDescricaoCurta("");
          setLinksRedesSociais({
            facebook: "",
            twitter: "",
            instagram: "",
            linkedin: "",
            youtube: "",
          });
        });

      setLinkVideo("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <Container maxW={"7xl"} p="12">
      <ChakraProvider>
        <Box p={5}>
          <VStack
            as="form"
            spacing={5}
            onSubmit={handleSubmit}
            onKeyPress={
              handleKeyPress as unknown as React.KeyboardEventHandler<HTMLDivElement>
            }
          >
            <FormControl isRequired>
              <FormLabel>Título</FormLabel>
              <Input
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título do Projeto"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição detalhada do projeto"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descrição Curta</FormLabel>
              <Textarea
                value={descricaoCurta}
                onChange={(e) => setDescricaoCurta(e.target.value)}
                placeholder="Breve descrição do projeto"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Link para Vídeo</FormLabel>
              <Input
                value={linkVideo}
                onChange={(e) => setLinkVideo(e.target.value)}
                placeholder="URL do vídeo"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Tags</FormLabel>
              <InputTag value={tags} onChange={handleTagChange} />
              <p>Tags atuais: {tags.map((tag) => tag.text).join(", ")}</p>
            </FormControl>

            <FormControl>
              <FormLabel>Links para Redes Sociais</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaFacebook />}
                />
                <Input
                  name="facebook"
                  value={linksRedesSociais.facebook}
                  onChange={handleInputChange}
                  placeholder="Facebook URL"
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaTwitter />}
                />
                <Input
                  name="twitter"
                  value={linksRedesSociais.twitter}
                  onChange={handleInputChange}
                  placeholder="Twitter URL"
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaInstagram />}
                />
                <Input
                  name="instagram"
                  value={linksRedesSociais.instagram}
                  onChange={handleInputChange}
                  placeholder="Instagram URL"
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaLinkedin />}
                />
                <Input
                  name="linkedin"
                  value={linksRedesSociais.linkedin}
                  onChange={handleInputChange}
                  placeholder="LinkedIn URL"
                />
              </InputGroup>
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaYoutube />}
                />
                <Input
                  name="youtube"
                  value={linksRedesSociais.youtube}
                  onChange={handleInputChange}
                  placeholder="YouTube URL"
                />
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              mt={4}
              w={"full"}
            >
              Enviar
            </Button>
          </VStack>
        </Box>
      </ChakraProvider>
    </Container>
  );
};

export default CreateProjectForm;
