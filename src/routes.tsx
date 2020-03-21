import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import MainPage from 'pages/MainPage';
import SignPage from 'pages/SignPage';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const routes = [
  {
    component: MainPage,
    path: '/',
    exact: true,
  },
  {
    component: SignPage,
    path: '/sign_in',
    exact: true,
  },
  {
    component: SignPage,
    path: '/sign_up',
    exact: true,
  },
];

function Routes() {
  const { data } = useQuery(IS_LOGGED_IN);
  console.log('@@@@@@', data);
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <Route key={JSON.stringify(route)} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
