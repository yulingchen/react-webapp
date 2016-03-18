import React from 'react'
import { Route, IndexRoute} from 'react-router'

/**
 * common
 */
import App from '../pages/App.js'
import NotFound from '../pages/NotFound.js'

/**
 * page
 */
import Index from '../pages/Index.js'
import City from '../pages/City.js'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="city" component={City}/>
    <Route path="*" component={NotFound}/>
  </Route>
)