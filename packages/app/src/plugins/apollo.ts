import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";

const uri = import.meta.env.VITE_GRAPHQL_ENDPOINT;

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: uri,
  // credentials: 'include',
});

const errorHandler = onError(
  ({ graphQLErrors, networkError, operation, forward }): any => {}
);

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink.concat(errorHandler),
  cache,
  connectToDevTools: true,
});

export default apolloClient;
