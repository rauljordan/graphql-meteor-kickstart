import { createApp } from 'mantra-core';
import initContext from './context';
import { combineReducers } from 'redux';

/**
 * We import every module from our client
 */
import coreModule from '/imports/client/core';
import countsModule from '/imports/client/counts';
console.log(countsModule.routes);
/**
 * This initializes the global context of our application (see configs for
 * details), such as Meteor, FlowRouter, and all the Collections
 */

const appReducer = {
  counts: combineReducers({
    filters: countsModule.reducers.filters
  })
};

const context = initContext(appReducer);

/**
 * We initialize the meteor application and load every module in
 */
const app = createApp(context);

app.loadModule(coreModule);
app.loadModule(countsModule);
app.init();
