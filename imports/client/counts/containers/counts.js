import React from 'react';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import Counts from '../components/counts';

const query = gql`
query CountsQuery($sort: String) {
  counts(sort: $sort) {
    amount
    createdAt
  }
}
`;

const reduxConnector = connect(
  state => ({
    countsSortFilter: state.counts.filters.countsSortFilter
  }),
  dispatch => ({
    updateCountsSortFilter(filter) {
      dispatch({
        type: 'UPDATE_COUNTS_SORT_FILTER',
        filter
      });
    }
  })
);

export default compose(
  reduxConnector,
  graphql(query, {
    options: ({ countsSortFilter }) => {
      return {
        variables: {
          sort: countsSortFilter
        }
      };
    }
  })
)(Counts);
