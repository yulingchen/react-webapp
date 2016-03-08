import {combineReducers} from 'redux'
import environment from './environment.js'
import {shopping,cart} from './shopping.js'

const rootReducer = combineReducers({
  environment,
  shopping,
  cart
})

export default rootReducer