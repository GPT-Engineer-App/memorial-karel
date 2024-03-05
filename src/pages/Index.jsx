import React from "react";
import { ChakraProvider, Box, Text, VStack, Heading, extendTheme, CSSReset } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { FaMonument } from "react-icons/fa";

// Custom theme to extend Chakra's default theme
const theme = extendTheme({
  colors: {
    darkBlue: {
      500: "#00008B", // Dark blue color
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "white",
      },
    },
    Text: {
      baseStyle: {
        color: "white",
      },
    },
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <CSSReset />
      <Box bg="darkBlue.500" w="100%" p={4} color="white" minHeight="100vh">
        <VStack>
          <FaMonument size="3em" />
          <Heading as="h1" size="2xl" letterSpacing={"tighter"}>
            Karier Karel Pamyatnik
          </Heading>
          <Text fontSize="xl" p={2}>
            Explore the legacy of Karel's monuments
          </Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
