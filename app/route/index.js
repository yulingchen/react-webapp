import React from 'react'
import { Route, IndexRoute} from 'react-router'


import App from '../containers/App.js'
import Cart from '../containers/Cart.js'
import CateMap from '../containers/CateMap.js'
import Index from '../containers/Index.js'
import Me from '../containers/Me.js'
import Product from '../containers/Product.js'

import Home from '../containers/Home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="cart" component={Cart} />
    <Route path="catemap" component={CateMap} />
    <Route path="me" component={Me} />
    <Route path="product/:productId" component={Product} />
  </Route>
)