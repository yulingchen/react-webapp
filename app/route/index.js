import React from 'react'
import { Route, IndexRoute} from 'react-router'

import NotFound from '../containers/NotFound.js'

import App from '../containers/App.js'
import Cart from '../containers/Cart.js'
import CateMap from '../containers/CateMap.js'
import Index from '../containers/Index.js'
import Me from '../containers/Me.js'
import Product from '../containers/Product.js'

import GoodsDetail from '../containers/GoodsDetail.js'
import GoodsCate from '../containers/GoodsCate.js'
import GoodsCart from '../containers/GoodsCart.js'

import Home from '../containers/Home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/cart" component={Cart} />
    <Route path="/catemap" component={CateMap} />
    <Route path="/me" component={Me} />
    <Route path="/goodsDetail/:id" component={GoodsDetail} />
    <Route path="/goodsCate/:id" component={GoodsCate} />
    <Route path="/goodsCart" component={GoodsCart} />
    <Route path="/home" component={Home} />
    <Route path="*" component={NotFound}/>
  </Route>
)