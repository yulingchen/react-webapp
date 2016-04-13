import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './routes/PostList/reducer'
import environment from './routes/App/reducer.js'

// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    environment,
    posts,
    ...asyncReducers,
  })
}
