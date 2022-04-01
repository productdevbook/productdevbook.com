import type { IncomingMessage, ServerResponse } from "http";
import { createServer } from "@graphql-yoga/node";
import { useAsyncSchema } from "@envelop/core";
import { UserResolver } from "../graphql/user/user.resolver";
import { buildSchema } from "type-graphql";
import * as TypeORM from "typeorm";
import { DataSource } from "typeorm";
import { User } from "~/server/entities/user.entity";
import "reflect-metadata";

const mySchema = buildSchema({
  resolvers: [UserResolver],
  dateScalarMode: "timestamp", // "timestamp" or "isoDate"
});

export default async (res: IncomingMessage, req: ServerResponse) => {
  const AppDataSource = new DataSource({
    url: process.env.DATABASE_URL,
    type: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
  });
  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch((error) => console.log(error));

  const server = createServer<{
    req: IncomingMessage;
    res: ServerResponse;
  }>({
    plugins: [useAsyncSchema(mySchema)],
    cors: false,
    endpoint: "/api/graphql",
  });
 return server(res, req);
};
