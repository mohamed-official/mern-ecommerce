import { ChakraProvider, Text } from "@chakra-ui/react";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Text color="orange.500">Hello World</Text>
    </ChakraProvider>
  );
}

export default App;
