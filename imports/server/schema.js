import counts from '/imports/server/counts';

export default [
  `
  type Query {

  }
  type Mutation {

  }
  schema {
    query: Query
    mutation: Mutation
  }
  `,
  counts.schema
];
