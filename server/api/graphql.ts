import type { IncomingMessage, ServerResponse } from "http";
import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";
const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return "Hello World!";
    },
  },
};

const cors = Cors();

const whitelist = [
  "localhost:3000",
  "http://localhost:3000",
  "https://studio.apollographql.com",
  "https://productdevbook.com",
  "http://127.0.0.1",
  "http://localhost:3000/api/graphql",
  process.env.CORS_ORIGIN,
];

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();
export default cors(async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.host);
  if (checkURL(req)) {
    // if (req.method === "OPTIONS") {
    //   res.end();
    //   return;
    // }
    await startServer;
    await await apolloServer.createHandler({
      path: "/",
    })(req, res);
  } else {
    res.end();
  }
});

function checkURL(req: IncomingMessage) {
  const reqOrigin = req.headers.host;
  if (!reqOrigin || whitelist.indexOf(reqOrigin) !== -1) {
    return true;
  } else {
    new Error("Not allowed by CORS");
  }
}
