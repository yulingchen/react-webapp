import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { environment, WINDOWSTORE } from './routes/App/reducer'

import articles from './routes/Index/reducer'

// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    environment,
    WINDOWSTORE,

    articles,

    ...asyncReducers,
  })
}
