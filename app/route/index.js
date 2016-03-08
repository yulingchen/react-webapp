import React from 'react'
import { Route, IndexRoute} from 'react-router'

/**
 * common
 */
import App from '../containers/App.js'
import NotFound from '../containers/NotFound.js'

/**
 * page
 */
import Index from '../containers/Index.js'
import Cate from '../containers/Cate.js'
import List from '../containers/List.js'
import Detail from '../containers/Detail.js'
import Cart from '../containers/Cart.js'
import Home from '../containers/Home.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/cate" component={Cate}/>
    <Route path="/list/:id" component={List}/>
    <Route path="/detail/:id" component={Detail}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/home" component={Home}/>
    <Route path="*" component={NotFound}/>
  </Route>
)