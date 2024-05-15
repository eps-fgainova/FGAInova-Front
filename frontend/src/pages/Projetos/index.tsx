import {  Flex, Heading, Image } from "@chakra-ui/react";

export default function Projetos() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Image src="../src/assets/bannerProjetos.png" alt="Projetos" />
      <Heading
      color={"white"}
      position={"fixed"}
      fontSize={"48px"}
      >Projetos</Heading>
    </Flex>
  );
}
