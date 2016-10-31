/**
 * Import necessary initial loads
 */
import schema from '/imports/server/schema';
import resolvers from '/imports/server/resolvers';

import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

createApolloServer({
  schema: makeExecutableSchema({
    typeDefs: schema,
    resolvers,
  })
});
