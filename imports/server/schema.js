import counts from '/imports/server/counts';

export default [
  `
  type Query {
    counts: [Count]
  }
  schema {
    query: Query
  }
  `,
  counts.schema
];
