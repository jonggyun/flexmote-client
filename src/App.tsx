import React from 'react';
import Routes from 'routes';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { getCookie } from 'lib/cookie';
import { validateUserId } from 'lib/regex';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
});
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

const setIdLoggedIn = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return validateUserId(JSON.parse(user)['user_id']);
  }
  return false;
};

cache.writeData({
  data: {
    isLoggedIn: setIdLoggedIn(),
  },
});

function App() {
  if (document.cookie) {
    getCookie();
  }
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
