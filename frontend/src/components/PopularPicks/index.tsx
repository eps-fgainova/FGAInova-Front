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

export default function PopularPicks() {
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
          <CardPopularPicks />
          <CardPopularPicks />
          <CardPopularPicks />
        </Stack>
      </Container>
    </Box>
  );
}
