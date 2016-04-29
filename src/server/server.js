import path from 'path';
import express from 'express';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.client.dev';

// import cookieParser from 'cookie-parser';
import helmet from 'helmet';
// import hpp from 'hpp';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { createMemoryHistory, RouterContext, match } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { trigger } from 'redial';
import { callAPIMiddleware } from '../middleware/callAPIMiddleware';
import { StyleSheetServer } from 'aphrodite';
import { configureStore } from '../store';
import Helm from 'react-helmet'; // because we are already using helmet
import reducer from '../createReducer';
import createRoutes from '../routes/root';

const isDeveloping = process.env.NODE_ENV == 'development';
const port = process.env.PORT || 18080;
const server = global.server = express();

// Security
server.disable('x-powered-by');
server.set('port', port);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
// server.use(hpp());
server.use(helmet.contentSecurityPolicy({
  defaultSrc: ["'self'"],
  scriptSrc: ["'self'"],
  styleSrc: ["'self'"],
  imgSrc: ["'self'"],
  connectSrc: ["'self'", 'ws:'],
  fontSrc: ["'self'"],
  objectSrc: ["'none'"],
  mediaSrc: ["'none'"],
  frameSrc: ["'none'"],
}));
server.use(helmet.xssFilter());
server.use(helmet.frameguard('deny'));
server.use(helmet.ieNoOpen());
server.use(helmet.noSniff());
// server.use(cookieParser());
server.use(compression());

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

// Render Document (include global styles)
const renderFullPage = (data, initialState, assets) => {
  const head = Helm.rewind();

  // Included are some solid resets. Feel free to add normalize etc.
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         ${head.title.toString()}
         <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
         ${head.meta.toString()}
         ${head.link.toString()}
         <link rel="stylesheet" href="//cdn.bootcss.com/normalize/3.0.3/normalize.css">
         <link rel="stylesheet" href="//cdn.jsdelivr.net/flexboxgrid/6.3.0/flexboxgrid.min.css" type="text/css" >
         <style>
          html {
            min-width: 320px;
            overflow-x: hidden;
            font-family: Helvetica-Neue,Helvetica,Arial,sans-serif;
          }
          body {
            font-size-adjust: none;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0,0,0,0.1);
            -webkit-text-size-adjust: none;
            font-size: 14px;
            line-height: 1.5;
            font-family: "Droid Sans","Droid Sans Fallback","Helvetica Neue",Helvetica,STHeiTi,sans-serif
          }
          a img {
            border: 0;
          }

          :focus {
            outline: 0;
          }
          ol,ul {
            list-style: none;
          }

          h1,h2,h3,h4,h5,p,span {
            overflow: visible;
          }
          a, a:active, a:visited {
            color: inherit;
            text-decoration: none;
          }
         </style>
         <style data-aphrodite>${data.css.content}</style>
      </head>
      <body>
        <div id="root">${data.html}</div>
        <script>window.renderedClassNames = ${JSON.stringify(data.css.renderedClassNames)};</script>
        <script>window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
        <script src="${ isDeveloping ? '/build/static/vendor.js' : assets.vendor.js}"></script>
        <script src="${ isDeveloping ? '/build/static/main.js' : assets.main.js}"></script>
      </body>
    </html>
  `;
};

// SSR Logic
server.get('*', (req, res) => {
  const store = configureStore();
  const routes = createRoutes(store);
  const history = createMemoryHistory(req.path);
  const { dispatch, getState } = store;

  match({ routes, history }, (err, redirectLocation, renderProps) => {
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
        const initialState = store.getState();
        const InitialView = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        // just call html = ReactDOM.renderToString(InitialView)
        // to if you don't want Aphrodite. Also change renderFullPage
        // accordingly
        const data = StyleSheetServer.renderStatic(
            () => ReactDOM.renderToString(InitialView)
        );
        res.status(200).send(renderFullPage(data, initialState, assets));
      })
      .catch(e => console.log(e));
  });
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
