/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { Box, Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";

const FileUploadButton = ({
  FormLabelName = "Nome da Label",
  name = "",
  onFileChange,
  accept = "image/*",
  multiple = false,
  ...props
}: {
  FormLabelName?: string;
  name?: string;
  onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  multiple?: boolean;
  [key: string]: any;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Flex alignItems={"center"} maxW={"360px"} justifyContent={"space-between"}>
      <FormLabel>{FormLabelName}</FormLabel>
      <Box>
        <Input
          type="file"
          name={name}
          onChange={onFileChange}
          accept={accept}
          multiple={multiple}
          ref={inputRef}
          display="none"
        />
        <Button
          onClick={handleClick}
          leftIcon={<FaFile />}
          colorScheme="teal"
          size="md"
          {...props} // Permite passar propriedades adicionais para o botão
        >
          Escolher Arquivos
        </Button>
      </Box>
    </Flex>
  );
};

export default FileUploadButton;
