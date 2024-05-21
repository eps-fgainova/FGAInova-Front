import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      py={12}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgColor="teal.400"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Página não encontrada
        </Text>
        <Text color={"gray.500"} mb={6}>
          A página que você procura parece não existir
        </Text>

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
          <Link to={"/"}>Voltar para a Home</Link>
        </Button>
      </Box>
    </Flex>
  );
}
