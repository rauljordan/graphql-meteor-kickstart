import counts from '/imports/server/counts';

export default [
  `
  type Query {
    counts(sort: String): [Count]
  }
  schema {
    query: Query
  }
  `,
  counts.schema
];
