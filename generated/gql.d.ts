
declare module '*/frameworks.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const frameworks: DocumentNode;

  export default defaultDocument;
}
    