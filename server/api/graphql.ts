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
const cors = Cors({});

const whitelist = [
  "localhost:3000",
  "https://studio.apollographql.com",
  "https://productdevbook.com",
  "productdevbook.com",
  "studio.apollographql.com",
  "http://127.0.0.1",
  process.env.CORS_ORIGIN,
];

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();
export default cors(async (req: IncomingMessage, res: ServerResponse) => {
  checkURL(req);
    if (req.method === "OPTIONS") {
      res.end();
      return;
    }
    if (checkURL(req)) {
      //@ts-ignore
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader("Access-Control-Allow-Origin", req.headers.origin || req.headers.host);
      console.log(res.getHeaders())
      await startServer;
      await await apolloServer.createHandler({
        path: "/",
      })(req, res);
    } else {
      res.end('You are not allowed to access');
    }
})
function checkURL(req: IncomingMessage): boolean {
  const reqOrigin = req.headers.origin || req.headers.host;
  if (reqOrigin && whitelist.indexOf(reqOrigin) !== -1) {
    return true;
  } else {
    new Error("Not allowed by CORS");
  }
}
