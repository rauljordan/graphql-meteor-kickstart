import * as Collections from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tracker } from 'meteor/tracker';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { createStore, applyMiddleware, combineReducers } from 'redux';

/**
 * We import all of the global variables we will need in our client, actions,
 * and routes that components can take in as props
 */
export default (appReducer) => {

  /**
   *  We initialize the apollo client instance and create the store
   */
  const client = new ApolloClient(meteorClientConfig());
  const middlewares = [
    client.middleware()
  ];

  const Store = createStore(
    combineReducers({
      ...appReducer,
      apollo: client.reducer()
    }),
    applyMiddleware(...middlewares)
  );

  return {
    Meteor,
    FlowRouter,
    Collections,
    Store,
    client,
    dispatch: Store.dispatch,
    Tracker
  };
};
