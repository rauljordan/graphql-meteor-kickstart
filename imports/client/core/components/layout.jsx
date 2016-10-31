import React from 'react';
import { ApolloProvider } from 'react-apollo';

const Layout = ({
  content = () => null
  context
}) => {
  const { client, Store } = context();
  return (
    <ApolloProvider client={client} store={Store}>
      <div>
        {content()}
      </div>
    </ApolloProvider>
  );
};

export default Layout;
