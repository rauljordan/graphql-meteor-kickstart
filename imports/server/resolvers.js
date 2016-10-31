import counts from '/imports/server/counts';

export default {
  Query: {
    ...counts.resolvers
  },
  Mutation: {
    ...counts.mutations
  }
};
