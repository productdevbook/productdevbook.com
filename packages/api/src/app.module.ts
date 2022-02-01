import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloServerPluginInlineTrace } from 'apollo-server-core';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { isArray } from 'class-validator';

import { AuthModule } from './modules/auth/auth.module';
import { AppResolver } from './app.resolver';

const gqlErrorFormatter = (error: GraphQLError) => {
  if (error.extensions.response && isArray(error.extensions.response.message)) {
    const extensions = {
      code: error.extensions.response.statusCode,
      errors: error.extensions.response.message,
    };

    const graphQLFormattedError: GraphQLFormattedError = {
      message: error.extensions.code,
      extensions: extensions,
    };
    return graphQLFormattedError;
  } else {
    console.log(error.message);
    const graphQLFormattedError: GraphQLFormattedError = {
      message: error.message,
      extensions: error.extensions,
    };
    return graphQLFormattedError;
  }
};


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env'
          : ['.env.development.local', '.env.development', '.env'],
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          apollo: {
            key: configService.get('APOLLO_KEY'),
            graphId: configService.get('APOLLO_GRAPH_ID'),
            graphVariant: configService.get('APOLLO_GRAPH_VARIANT'),
            graphReference: configService.get('APOLLO_SCHEMA_REPORTING'),
          },
          plugins: [ApolloServerPluginInlineTrace()],
          uploads: false,
          sortSchema: true,
          autoSchemaFile: './src/schema.graphql',
          debug: configService.get('GRAPHQL_DEBUG') || true,
          playground: configService.get('GRAPHQL_PLAYGROUND') || true,
          context: ({ req }) => ({ req }),
          formatError: (error: GraphQLError) => gqlErrorFormatter(error),

        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule { }
