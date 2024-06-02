import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Tag,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
} from "@chakra-ui/react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useRef } from "react";
import { api } from "../../service";
import { useLocation, useNavigate } from "react-router";
import BGImage from "../../assets/bannerProjetos.png";

interface ICardPopularPicks {
  titulo?: string;
  descricaoCurta?: string;
  banner?: string;
  _id?: string;
  tags?: string[];
  pessoaId?: string;
  onDeleteSuccess?: () => void;
}

export default function CardPopularPicks({
  titulo = "Titulo",
  descricaoCurta = "Descrição",
  banner = BGImage,
  tags,
  _id,
  pessoaId,
  onDeleteSuccess,
}: ICardPopularPicks) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const locationHome =
    location.pathname === "/" || location.pathname === "/projetos";

  const token =
    sessionStorage.getItem("@token") &&
    JSON.parse(sessionStorage.getItem("@token") || "");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  const toast = useToast();

  const handleDelete = () => {
    try {
      api
        .delete(`/projeto/${_id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast({
            title: `${res.data.message} 😎`,
            description: "Criamos sua conta para você.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-left",
          });
          onClose();
          onDeleteSuccess && onDeleteSuccess();
        });
    } catch (error) {
      toast({
        title: "Algo esta errado. 😥",
        description: "Ocorreu um erro! 🤨",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleEdit = () => {
    navigate(`/projeto/editar/${_id}`);
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar o projeto{" "}
              <Text as={"strong"} textDecoration={"underline"}>
                {titulo}
              </Text>
            </AlertDialogHeader>

            <AlertDialogBody>
              Você tem certeza que deseja deletar este projeto? Você não poderá
              desfazer essa ação posteriormente.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Deletar Projeto
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Card Abaixo */}
      <Center py={6}>
        <Box
          maxW={"445px"}
          minH={"605px"}
          // height={"full"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
            css={{
              background: `url(${banner}) white no-repeat center center / cover`,
            }}
          ></Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
              display={"flex"}
              gap={".5rem"}
            >
              {tags?.map((text, i) => (
                <Tag key={i + "_" + text} colorScheme="teal">
                  {text}
                </Tag>
              ))}
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
              textTransform={"capitalize"}
            >
              {titulo}
            </Heading>
            <Text
              h={"full"}
              minH={"208px"}
              color={"gray.500"}
              noOfLines={8}
              textAlign={"justify"}
            >
              {descricaoCurta}
            </Text>
          </Stack>
          {pessoaId === user._id && !locationHome ? (
            <Stack
              mt={6}
              direction={"row"}
              spacing={4}
              align={"center"}
              justifyContent={"space-evenly"}
            >
              <Button
                leftIcon={<FaRegEdit />}
                colorScheme="teal"
                variant="solid"
                onClick={handleEdit}
              >
                Editar
              </Button>
              <Button
                rightIcon={<FaRegTrashAlt />}
                colorScheme="red"
                onClick={onOpen}
              >
                Deletar
              </Button>
            </Stack>
          ) : (
            <Stack
              mt={6}
              direction={"row"}
              spacing={4}
              align={"center"}
              justifyContent={"space-between"}
            >
              {/* <Avatar
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Achim Rolle</Text>
                <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
              </Stack> */}
              <Button
                // rightIcon={<FaRegTrashAlt />}
                colorScheme="teal"
                width={"100%"}
                onClick={() => {
                  navigate(`/projeto/${_id}`);
                }}
              >
                + Info
              </Button>
            </Stack>
          )}
        </Box>
      </Center>
    </>
  );
}
