/* eslint-disable react-hooks/rules-of-hooks */
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
} from "@chakra-ui/react";

export default function Login() {
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
        {/* <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Iniciativas inovadoras{" "}
            <Text as={"span"} bgColor={"teal.400"} bgClip="text">
              para projetos
            </Text>{" "}
            universitários
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, teal.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, teal.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack> */}
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
          <Box as={"form"} mt={1}>
            <Stack spacing={4}>
              <Input
                placeholder="seuemail@mail.com"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
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
              />
            </Stack>
            <Button
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
          form
        </Stack>
      </Container>
    </Flex>
  );
}
