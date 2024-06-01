/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,  
} from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  Heading,
  Image,
  useToast,  
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,  
  FaExternalLinkAlt,
} from "react-icons/fa";
import api from "../../service";
import InputTag, { TagData } from "../../components/InputTag";
import FileUploadButton from "../../components/FileUploadButton ";

interface IParams {
  id?: string;
  [key: string]: string | undefined;
}

const CreateProjectForm: React.FC = () => {
  const { id } = useParams<IParams>();
  const toast = useToast();

  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [descricaoCurta, setDescricaoCurta] = useState<string>("");
  const [linksRedesSociais, setLinksRedesSociais] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    site: "",
  });
  const [linkVideo, setLinkVideo] = useState<string>("");
  const [tags, setTags] = useState<TagData[]>([]);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [imagens, setImagens] = useState<File[]>([]);
  const [existingBannerUrl, setExistingBannerUrl] = useState<string | null>(
    null
  );
  const [existingLogoUrl, setExistingLogoUrl] = useState<string | null>(null);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [removedImages, setRemovedImages] = useState<string[]>([]);
  const token = JSON.parse(sessionStorage.getItem("@token") || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      api
        .get(`/projeto/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const {
            titulo,
            descricao,
            descricaoCurta,
            linksRedesSociais,
            linkVideo,
            tags,
            bannerUrl,
            logoUrl,
            imagens,
          } = response.data;
          setTitulo(titulo);
          setDescricao(descricao);
          setDescricaoCurta(descricaoCurta);
          setLinksRedesSociais(linksRedesSociais);
          setLinkVideo(linkVideo);
          setTags(tags.map((tag: string) => ({ id: tag, text: tag })));
          setExistingBannerUrl(bannerUrl);
          setExistingLogoUrl(logoUrl);
          setExistingImages(imagens);
        })
        .catch((error) => console.error("Erro ao buscar projeto:", error));
    } else {
      setTitulo("");
      setDescricao("");
      setDescricaoCurta("");
      setLinksRedesSociais({
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        youtube: "",
        site: "",	
      });
      setLinkVideo("");
      setTags([]);
      setExistingBannerUrl(null);
      setExistingLogoUrl(null);
      setExistingImages([]);
      setRemovedImages([]);
    }
  }, [id, token]);

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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      if (name === "banner") {
        setBannerFile(files[0]);
        setExistingBannerUrl(null); // Remove the existing banner
      } else if (name === "logo") {
        setLogoFile(files[0]);
        setExistingLogoUrl(null); // Remove the existing logo
      } else if (name === "imagens") {
        setImagens(Array.from(files));
      }
    }
  };

  const handleRemoveImage = (type: string, index?: number) => {
    if (type === "banner") {
      setBannerFile(null);
      setExistingBannerUrl(null);
    } else if (type === "logo") {
      setLogoFile(null);
      setExistingLogoUrl(null);
    } else if (type === "imagens" && index !== undefined) {
      setImagens(imagens.filter((_, i) => i !== index));
    } else if (type === "existingImages" && index !== undefined) {
      const removedImage = existingImages[index];
      setRemovedImages([...removedImages, removedImage]);
      setExistingImages(existingImages.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descricao", descricao);
    formData.append("descricaoCurta", descricaoCurta);
    formData.append("linkVideo", linkVideo);
    tags.forEach((tag, index) => {
      formData.append(`tags[${index}]`, tag.text);
    });
    formData.append("linksRedesSociais[facebook]", linksRedesSociais.facebook);
    formData.append("linksRedesSociais[twitter]", linksRedesSociais.twitter);
    formData.append(
      "linksRedesSociais[instagram]",
      linksRedesSociais.instagram
    );
    formData.append("linksRedesSociais[linkedin]", linksRedesSociais.linkedin);
    formData.append("linksRedesSociais[youtube]", linksRedesSociais.youtube);
    formData.append("linksRedesSociais[site]", linksRedesSociais.site);
    if (bannerFile) {
      formData.append("banner", bannerFile);
    }
    if (logoFile) {
      formData.append("logo", logoFile);
    }
    imagens.forEach((imagem) => {
      formData.append(`imagens`, imagem);
    });
    removedImages.forEach((imageUrl, index) => {
      formData.append(`removedImages[${index}]`, imageUrl);
    });

    try {
      if (id) {
        await api
          .put(`/projeto/${id}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            toast({
              title: "Projeto Atualizado com Sucesso! 😁",
              description: "Atualizamos seu projeto. 😉",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "bottom-left",
            });
          });
      } else {
        await api
          .post("/projeto", formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            toast({
              title: "Projeto CRIADO com Sucesso! ✅❤️",
              description: "Criamos seu novo projeto. 😉",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "bottom-left",
              onCloseComplete: () => {
                navigate(`/perfil`);
              },
            });
          })
          .then(() => {
            setTimeout(() => {
              navigate(`/perfil`);
            }, 3000);
          });
      }
    } catch (error) {
      console.error("Erro ao enviar projeto:", error);
      toast({
        title: "Algo deu errado ao criar seu projeto! 😥",
        description: "Verifique os campos preenchidos. 😉",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
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
          <Heading as="h1" mb={"1rem"}>
            {id ? "Editar Projeto " : "Novo Projeto 😎"}
          </Heading>
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
                height={"20rem"}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descrição Curta</FormLabel>
              <Textarea
                value={descricaoCurta}
                onChange={(e) => setDescricaoCurta(e.target.value)}
                placeholder="Breve descrição do projeto"
                maxLength={361}
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
              <InputGroup mt={2}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FaExternalLinkAlt />}
                />
                <Input
                  name="site"
                  value={linksRedesSociais.site}
                  onChange={handleInputChange}
                  placeholder="Site URL"
                />
              </InputGroup>
            </FormControl>

            <FormControl borderWidth='1px' borderRadius='lg' padding={"1rem"}>
              <FileUploadButton
                FormLabelName="Banner do Projeto"
                name="banner"
                onFileChange={handleFileChange}
                accept="image/*"
                multiple
              />              
              {bannerFile ? (
                <Box mt={2}>
                  <Image
                    src={URL.createObjectURL(bannerFile)}
                    alt="Banner Preview"
                    boxSize="150px"
                    objectFit="cover"
                  />
                  <Button
                    mt={2}
                    colorScheme="red"
                    onClick={() => handleRemoveImage("banner")}
                  >
                    Remover Banner
                  </Button>
                </Box>
              ) : existingBannerUrl ? (
                <Box mt={2}>
                  <Image
                    src={existingBannerUrl}
                    alt="Existing Banner"
                    boxSize="150px"
                    objectFit="cover"
                  />
                  <Button
                    mt={2}
                    colorScheme="red"
                    onClick={() => handleRemoveImage("banner")}
                  >
                    Remover Banner
                  </Button>
                </Box>
              ) : null}
            </FormControl>

            
            <FormControl  borderWidth='1px' borderRadius='lg' padding={"1rem"}>
              <FileUploadButton
                FormLabelName="Logo do Projeto"
                name="logo"
                onFileChange={handleFileChange}
                accept="image/*"                
              />              
              {logoFile ? (
                <Box mt={2}>
                  <Image
                    src={URL.createObjectURL(logoFile)}
                    alt="Logo Preview"
                    boxSize="150px"
                    objectFit="cover"
                  />
                  <Button
                    mt={2}
                    colorScheme="red"
                    onClick={() => handleRemoveImage("logo")}
                  >
                    Remover Logo
                  </Button>
                </Box>
              ) : existingLogoUrl ? (
                <Box mt={2}>
                  <Image
                    src={existingLogoUrl}
                    alt="Existing Logo"
                    boxSize="150px"
                    objectFit="cover"
                  />
                  <Button
                    mt={2}
                    colorScheme="red"
                    onClick={() => handleRemoveImage("logo")}
                  >
                    Remover Logo
                  </Button>
                </Box>
              ) : null}
            </FormControl>

            <FormControl borderWidth='1px' borderRadius='lg' padding={"1rem"}>
              <FileUploadButton
                FormLabelName="Imagens do Projeto"
                name="imagens"
                onFileChange={handleFileChange}
                accept="image/*"
                multiple
              />              
              {imagens.length > 0 && (
                <Box mt={2} display="flex" flexDirection="row" gap="1rem">
                  {imagens.map((imagem, index) => (
                    <Box
                      key={index}
                      mt={2}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      padding="1rem"
                      borderRadius=".5rem"
                      border={`1px solid #ccc`}
                    >
                      <Image
                        src={URL.createObjectURL(imagem)}
                        alt={`Imagem ${index + 1} Preview`}
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Button
                        mt={2}
                        colorScheme="red"
                        onClick={() => handleRemoveImage("imagens", index)}
                      >
                        Remover Imagem {index + 1}
                      </Button>
                    </Box>
                  ))}
                </Box>
              )}
              {existingImages.length > 0 && (
                <Box mt={2} display="flex" flexDirection="row" gap="1rem">
                  {existingImages.map((imageUrl, index) => (
                    <Box
                      key={index}
                      mt={2}
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      padding="1rem"
                      borderRadius=".5rem"
                      border={`1px solid #ccc`}
                    >
                      <Image
                        src={imageUrl}
                        alt={`Existing Imagem ${index + 1}`}
                        boxSize="150px"
                        objectFit="cover"
                      />
                      <Button
                        mt={2}
                        colorScheme="red"
                        onClick={() =>
                          handleRemoveImage("existingImages", index)
                        }
                      >
                        Remover Imagem {index + 1}
                      </Button>
                    </Box>
                  ))}
                </Box>
              )}
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              mt={4}
              w={"full"}
            >
              {id ? "Salvar Alterações" : "Enviar"}
            </Button>
          </VStack>
        </Box>
      </ChakraProvider>
    </Container>
  );
};

export default CreateProjectForm;
