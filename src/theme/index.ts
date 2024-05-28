import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
          'html, body': {
            color: 'gray.600',
            lineHeight: 'tall',
          },
          a: {
            // color: 'teal.500',
          },
          // 'h1, div': {
          //   color: 'pink.500',
          //   fontWeight: 'bold',
          // }
        },
      },
});
