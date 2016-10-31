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
    resolvers
  })
});

import { Counts } from '/lib/collections';

const counts = [1, 2, 3, 4, 5];
counts.forEach(amount => {
  if (!Counts.findOne({amount})) {
    Counts.insert({
      amount,
      createdAt: new Date
    });
  }
});
