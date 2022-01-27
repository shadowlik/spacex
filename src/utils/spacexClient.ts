import { ApolloClient, InMemoryCache } from "@apollo/client";

export const spacexClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.spacex.land/graphql/',
});