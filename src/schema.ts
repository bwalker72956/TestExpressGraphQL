import { GraphQLSchema, graphql } from "graphql";
import "graphql-import-node";
import { makeExecutableSchema } from "graphql-tools";
import helloWorld from "./schema/types/helloWorld";

const schema: GraphQLSchema = new GraphQLSchema({
  query: helloWorld,
});

export default schema;
