import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Link,
  Tag,
  HStack,
  Container,
  Button,
  Image,
  AspectRatio,
  Avatar,
} from "@chakra-ui/react";
import { IProjeto } from "../../Interface/Projeto";
import api from "../../service";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProjetoView = () => {
  const { id } = useParams();
  const [projeto, setProjeto] = useState<IProjeto>();

  useEffect(() => {
    const fetchProjeto = async () => {
      // Substitua pela URL correta da sua API
      const response = await api.get(`/projetos/public/${id}`);
      const data = await response.data;
      setProjeto(data);
    };

    fetchProjeto();
  }, [id]);

  function transformYouTubeUrl(url: string): string {
    const urlPattern = /https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/;
    const match = url.match(urlPattern);

    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }

    throw new Error("URL do YouTube inválida");
  }

  if (!projeto) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Box position={"relative"} mb={"2rem"}>
        <AspectRatio ratio={4 / 3} height="309">
          <Image
            width={"100%"}
            src={
              projeto.bannerUrl
                ? projeto.bannerUrl
                : "../src/assets/bannerProjetos.png"
            }
            alt="Projetos"
            objectFit="cover"
          />
        </AspectRatio>
        {projeto.logoUrl && (
          <Avatar
            position={"absolute"}
            showBorder
            size="2xl"
            name="Segun Adebayo"
            top={"75%"}
            left={"20%"}
            backgroundColor={"white"}
            src={
              projeto.logoUrl ? projeto.logoUrl : "https://bit.ly/sage-adebayo"
            }
            boxShadow={"2xl"}
            borderRadius={".5rem"}
          />
        )}
      </Box>

      <Container maxW={"7xl"} p="12" minH={"100vh"}>
        <Heading mb={4}>{projeto.titulo}</Heading>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
          display={"flex"}
          gap={".5rem"}
          mb={4}
        >
          {projeto.tags?.map((text, i) => (
            <Tag key={i + "_" + text} colorScheme="teal">
              {text}
            </Tag>
          ))}
        </Text>
        <Heading as="h6" mb={4}>
          Sobre
        </Heading>
        <Text textAlign={"justify"} mb={4} whiteSpace={"pre-line"}>
          {projeto.descricao}
        </Text>

        {projeto.imagens.length && (
          <>
            <Heading mt={4} mb={6}>
              Imagens do Projeto
            </Heading>

            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              {projeto.imagens.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    width={"100%"}
                    height={"700px"}
                    src={img}
                    alt="Projetos"
                    objectFit="cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        {projeto.linkVideo && (
          <>
            <Heading mt={4} mb={6}>
              Video Apresentação
            </Heading>
            <Box
              as="iframe"
              src={transformYouTubeUrl(projeto.linkVideo)}
              width="100%"
              sx={{
                aspectRatio: "16/9",
              }}
              borderRadius={"1rem"}
              mb={6}
            />
          </>
        )}

        <Heading mb={4} as={"h4"}>
          Contatos
        </Heading>
        <HStack spacing={4}>
          {projeto.linksRedesSociais.facebook && (
            <Button
              leftIcon={<FaFacebook />}
              colorScheme="facebook"
              variant="solid"
            >
              <Link href={projeto.linksRedesSociais.facebook} isExternal>
                Facebook
              </Link>
            </Button>
          )}
          {projeto.linksRedesSociais.twitter && (
            <Button
              leftIcon={<FaTwitter />}
              colorScheme="twitter"
              variant="solid"
            >
              <Link href={projeto.linksRedesSociais.twitter} isExternal>
                Twitter
              </Link>
            </Button>
          )}
          {projeto.linksRedesSociais.instagram && (
            <Button
              leftIcon={<FaInstagram />}
              colorScheme="pink"
              variant="solid"
            >
              <Link href={projeto.linksRedesSociais.instagram} isExternal>
                Instagram
              </Link>
            </Button>
          )}
          {projeto.linksRedesSociais.linkedin && (
            <Button
              leftIcon={<FaLinkedin />}
              colorScheme="linkedin"
              variant="solid"
            >
              <Link href={projeto.linksRedesSociais.linkedin} isExternal>
                LinkedIn
              </Link>
            </Button>
          )}
          {projeto.linksRedesSociais.youtube && (
            <Button leftIcon={<FaYoutube />} colorScheme="red" variant="solid">
              <Link href={projeto.linksRedesSociais.youtube} isExternal>
                YouTube
              </Link>
            </Button>
          )}

          {projeto.linksRedesSociais.site && (
            <Button leftIcon={<FaExternalLinkAlt />} bg='black' color='white' _hover={{ bg: 'blackAlpha.800' }} variant="solid">
              <Link href={projeto.linksRedesSociais.site} isExternal>
                Site
              </Link>
            </Button>
          )}
        </HStack>
      </Container>
    </>
  );
};

export default ProjetoView;
