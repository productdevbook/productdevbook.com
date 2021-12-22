import {
  ApolloClient,
  createHttpLink,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { provideApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.GRAPHQL_ENDPOINT,
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
provideApolloClient(apolloClient);

export default apolloClient;
