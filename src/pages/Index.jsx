import React from "react";
import { ChakraProvider, Box, Text, VStack, Heading, extendTheme, CSSReset, Flex } from "@chakra-ui/react";
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
      <Flex>
        <Box width="250px" bg="gray.800" height="100vh" p={4} color="white">
          <Text mb="4">КонртКарьер</Text>
          {}
        </Box>
        <Box bg="darkBlue.500" w="100%" p={4} color="white" minHeight="100vh">
          <VStack>
            <Heading as="h1" size="2xl" letterSpacing={"tighter"}>
              Karier Karel Pamyatnik
            </Heading>
            <Text fontSize="xl" p={2}>
              Explore the legacy of Karel's monuments
            </Text>
          </VStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
