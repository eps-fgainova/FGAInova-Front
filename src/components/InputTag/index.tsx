import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Tag, TagCloseButton } from "@chakra-ui/react";
import styles from "./Input.module.css";

export interface TagData {
  value?: string | Blob;
  text: string;
  color?: string | unknown;
}

const dataTemp: TagData[] = [{ text: "hello1" }, { text: "hello2" }];

export default function InputTag(props: {
  value: TagData[];
  onChange: (newValue: TagData[]) => void;
}) {
  const [dataInput, setDataIput] = useState<TagData[]>(
    props.value || [...dataTemp]
  );
  const [sizeInput, setSizeInput] = useState<number>(1);
  const ref_input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref_input.current?.focus(); // auto focus input

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      const newText = (event.target as HTMLInputElement).value
        .trim()
        .replace(",", "");
      switch (event.key) {
        case ",":
          if (newText.length > 0) {
            const dataInputTemp = [...dataInput];
            dataInputTemp.push({ text: newText });
            setDataIput([...dataInputTemp]);
            if (ref_input.current) {
              ref_input.current.value = "";
            }
          } else {
            if (ref_input.current) {
              ref_input.current.value = "";
            }
          }
          break;
        case "Enter":
          if (newText.length > 0) {
            const dataInputTemp = [...dataInput];
            dataInputTemp.push({ text: newText });
            setDataIput([...dataInputTemp]);
            if (ref_input.current) {
              ref_input.current.value = "";
            }
            props.onChange && props.onChange(dataInputTemp); // Call onChange only on Enter
          }
          break;
        case "Backspace":
          if (dataInput.length > 0 && newText.length === 0) {
            const dataInputTemp = [...dataInput];
            dataInputTemp.pop();
            setDataIput([...dataInputTemp]);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener(
      "keyup",
      handleKeyUp as unknown as (event: KeyboardEvent) => void
    );

    return () =>
      window.removeEventListener(
        "keyup",
        handleKeyUp as unknown as (event: KeyboardEvent) => void
      );
  }, [sizeInput, dataInput]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim().length > 0) {
      setSizeInput(value.length);
    } else {
      if (ref_input.current) {
        ref_input.current.value = "";
      }
    }
  };

  const handleDelItem = (index: number) => {
    const dataInputTemp = [...dataInput];
    dataInputTemp.splice(index, 1);
    setDataIput([...dataInputTemp]);
    props.onChange && props.onChange(dataInputTemp); // Update parent value
  };

  return (
    <div className={styles.wrap}>
      <Flex align="center" onClick={() => ref_input.current?.focus()}>
        <Box>
          {dataInput.map((text, i) => (
            <Tag
              key={i + "_" + text.text}
              colorScheme="teal"
              className={styles.item_text}
            >
              {text.text}
              <TagCloseButton onClick={() => handleDelItem(i)} />
            </Tag>
          ))}
          <input
            ref={ref_input}
            onChange={handleChangeInput}
            className={styles.input}
            size={sizeInput}
          />
        </Box>
      </Flex>
    </div>
  );
}
