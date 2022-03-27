import { ApolloServer, gql } from 'apollo-server-micro'
import Cors from 'micro-cors'
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const cors = Cors()

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!';
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();
export default cors(async (req, res) => {
  // console.log(req)
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});