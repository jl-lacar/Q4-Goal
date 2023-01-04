import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./Router/AppRouter";
import { theme } from "./Theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRouter />
  </ChakraProvider>
);
