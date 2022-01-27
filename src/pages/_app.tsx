import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ApolloProvider } from "@apollo/client";
import { spacexClient } from "../utils/spacexClient";
import { theme } from '../utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={spacexClient}>
      <ChakraProvider theme={theme}>
        <Container maxW="container.lg">
          <Header />

          <main>
            <Component {...pageProps} />
          </main>

          <Footer />
        </Container>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
