import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';

const routes = [
  {
    component: MainPage,
    path: '/',
    exact: true,
  },
];

function Routes() {
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
