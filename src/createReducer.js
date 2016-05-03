import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { environment } from './routes/App/reducer'

import articles from './routes/Home/reducer'
import currentArticle from './routes/Article/reducer'

export default function createReducer(asyncReducers) {
  return combineReducers({
    /**
     * react-router-redux
     * routes change mixin
     */
    routing: routerReducer,

    environment,

    /**
     * index pages
     */
    articles,

    /**
     * client[not app] url change ===> server render
     */
    currentArticle,
    
    /**
     * other
     */
    ...asyncReducers,
  })
}
