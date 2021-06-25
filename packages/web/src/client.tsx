import React from 'react';
// eslint-disable-next-line
import { hydrate, unstable_createRoot as createRoot } from 'react-dom';
import { createBrowserHistory } from 'history';

import { RoutingContext, createRouter } from '@world/route';

import App from './App';
import { routes } from './routes';

// hydrate(
//   <App />,
//   document.getElementById('root')
// );

// Uses the custom router setup to define a router instance that we can pass through context
const router = createRouter(routes, createBrowserHistory());

createRoot(document.getElementById('root')).render(
  <RoutingContext.Provider value={router.context}>
    <App />
  </RoutingContext.Provider>,
);

// if (module.hot) {
//   module.hot.accept();
// }
