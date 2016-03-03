import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, useRouterHistory, browserHistory} from 'react-router'

import route from './route'
import configureStore from './store/configureStore.js'

import { getProduct } from './actions/cart.js'

import './styles/app.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={route}/>
  </Provider>,
  document.getElementById('root')
)