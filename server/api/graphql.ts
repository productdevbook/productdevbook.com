import type { IncomingMessage, ServerResponse } from "http";
import { createServer } from '@graphql-yoga/node'

const server = createServer<{
  req: IncomingMessage
  res: ServerResponse
}>({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello Hello Hello'
      }
    }
  },
  cors: false,
  endpoint: '/api/graphql',
})


export default server