import { GraphQLObjectType, GraphQLString, GraphQLScalarType } from "graphql";
import { stringify } from "querystring";

const collectionType: GraphQLObjectType = new GraphQLObjectType({
  name: "Collection",
  fields: () => ({
    helloWorld: {
      type: GraphQLString,
      args: { name: { type: GraphQLString } },
      resolve: (parent, args, ctx) => {
        const { name } = args;
        return `👋 Hello ${name}! 👋`;
      },
    },
  }),
});

export default collectionType;
