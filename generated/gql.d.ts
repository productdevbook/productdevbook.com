
declare module '*/a.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const framework: DocumentNode;

  export default defaultDocument;
}
    