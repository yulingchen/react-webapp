import {combineReducers} from 'redux'

// import { postsByReddit, selectedReddit}  from './reddit.js'
// import { default as cart, getQuantity, getAddedIds } from './cart'
// import { default as product, getProduct } from './product'

import { default as commodity} from './buy.js'

import { toaster, systemInfo } from './app.js'
import { prueData } from './request.js'

// export function getTotal(state) {
//   return getAddedIds(state.cart).reduce((total, id) =>
//     total + getProduct(state.product, id).price * getQuantity(state.cart, id),
//     0
//   ).toFixed(2)
// }

// export function getCartProducts(state) {
//   return getAddedIds(state.cart).map(id => ({
//     ...getProduct(state.product, id),
//     quantity: getQuantity(state.cart, id)
//   }))
// }

const rootReducer = combineReducers({
  commodity,
  toaster,
  systemInfo,
  prueData
})

export default rootReducer