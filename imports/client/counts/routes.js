import React from 'react';
import { mount } from 'react-mounter';

import Layout from '/imports/client/core/containers/layout';
import Counts from './containers/counts';

export default (injectDeps, {FlowRouter}) => {
  const LayoutCtx = injectDeps(Layout);

  FlowRouter.route('/counts', {
    name: 'counts',
    action() {
      mount(LayoutCtx, {
        content: () => (<Counts/>)
      });
    }
  });

};
