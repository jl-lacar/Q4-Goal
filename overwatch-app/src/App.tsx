import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "./router/AppRouter";
import { theme } from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRouter />
  </ChakraProvider>
);
