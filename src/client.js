import 'babel-polyfill';
import { trigger } from 'redial';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import match from 'react-router/lib/match';
import browserHistory from 'react-router/lib/browserHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { StyleSheet } from 'aphrodite';

import { configureStore } from './store';

const initialState = window.INITIAL_STATE || {};

// Set up Redux (note: this API requires redux@>=3.1.0):
const store = configureStore(initialState);
const { dispatch, getState } = store;
const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;
const container = document.getElementById('root');

// routes reducer into store
const history = syncHistoryWithStore(browserHistory, store)

StyleSheet.rehydrate(window.renderedClassNames);

let render = () => {
  // We need to have a root route for HMR to work.
  const createRoutes = require('./routes/root').default
  const routes = createRoutes(store)

  // Pull child routes using match. Adjust Router for vanilla webpack HMR,
  // in development using a new key every time there is an edit.
  match({ routes, location }, () => {
    // Render app with Redux and router context to container element.
    // We need to have a random in development because of `match`'s dependency on
    // `routes.` Normally, we would want just one file from which we require `routes` from.
    ReactDOM.render(
      <Provider store={store}>
          <Router routes={routes} history={history} key={Math.random()}/>
      </Provider>,
      container
    )

  })

  history.listen(location => {
    // Match routes based on location object:
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      // Get array of route handler components:
      const { components } = renderProps;

      // Define locals to be provided to all lifecycle hooks:
      const locals = {
          path: renderProps.location.pathname,
          query: renderProps.location.query,
          params: renderProps.params,

          // Allow lifecycle hooks to dispatch Redux actions:
          dispatch,
          getState
        };

      // Don't fetch data for initial route, server has already done the work:
      if (window.INITIAL_STATE) {
        // Delete initial data so that subsequent data fetches can occur:
        delete window.INITIAL_STATE;
      } else {
        // Fetch mandatory data dependencies for 2nd route change onwards:
        trigger('fetch', components, locals);
      }

      // Fetch deferred, client-only data dependencies:
      trigger('defer', components, locals);
    })
  })
}

if (module.hot) {
  module.hot.accept('./routes/root', () => {
    setTimeout(render)
  })
}

render()
