import counts from '/imports/server/counts';

export default [
  `
  type Query {
    counts(sort: String): [Count]
  }
  type Mutation {
    addCount: Count
  }
  schema {
    query: Query,
    mutation: Mutation
  }
  `,
  counts.schema
];
