import 'babel-polyfill'
import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'


import morgan from 'morgan'
import bodyParser from 'body-parser'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.client.dev'

import { createMemoryHistory, RouterContext, match } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { trigger } from 'redial'

import { callAPIMiddleware } from '../middleware/callAPIMiddleware';
import { StyleSheetServer } from 'aphrodite';
import { configureStore } from '../store';
import reducer from '../createReducer';
import createRoutes from '../routes/root';

import { syncHistoryWithStore } from 'react-router-redux'

const isDeveloping = process.env.NODE_ENV == 'development';
const port = process.env.PORT || 18080;
const server = global.server = express();

// Security
server.set('port', port);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// API
server.use('/api/articles', require('./api/articles'));
server.use('/api/article', require('./api/article'));

// Stub for assets, in case running in dev mode.
let assets;

// Webpack (for development)
if (isDeveloping) {
  server.use(morgan('dev'));
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: true,
      modules: false,
    },

  });
  server.use(middleware);

  server.use(webpackHotMiddleware(compiler, {
    log: console.log,
  }));

  server.use('/src/static', express.static('./src/static'));
} else {
  assets = require('../../assets.json');
  server.use(morgan('combined'));
  server.use('/build/static', express.static('./build/static'));
}

import renderFullPage from './renderFullPage'

// SSR Logic
server.get('*', async (req, res, next) => {
  try {
    const memoryHistory = createMemoryHistory(req.path)
    let store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store)

    const routes = createRoutes(store);
    const { dispatch, getState } = store;

    match({ routes, history, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal server error');
      }

      if (!renderProps)
        return res.status(404).send('Not found');

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

      // Wait for async data fetching to complete, then render:
      trigger('fetch', components, locals)
        .then(() => {
          const initialState = configureStore(memoryHistory, store.getState())

          const content = ReactDOM.renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          )
          res.status(200).send(renderFullPage(content, initialState, assets, isDeveloping));
        })
        .catch(e => console.log(e));
    });
  } catch (err) {
    next(err)
  }
});

// Listen
server.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }

  console.info('==> 🌎 Listening on port %s.' +
    'Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

module.exports = server;
