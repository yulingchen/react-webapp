import { combineReducers } from 'redux'
import { RECEIVE_PRODUCT, ADD_TO_CART } from '../constants/ActionTypes'

// 加入购物车时，商品数量 － 1
function product(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

// 获取商品
function byId(state={}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      // productId为key，组成新对象
      // {
      //  "1": {"id":"1","name":"鞋子"},
      //  "2": {"id":"2","name":"衣服"},
      //  "20": {"id":"20","name":"篮球"},
      // }
      // return {
      //   ...state,
      //   ...action.product.reduce((obj, product) => {
      //     obj[product.id] = product
      //     return obj
      //   }, {})
      // }
    default:
      const {productId} = action
      if (productId) {
        return {
          ...state,
          [productId]: product(state[productId], action)
        }
      }
      return state
  }
}

// 商品id push 进容器
function visibleIds(state=[], action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.product.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

// 获取目前商品状态
export function getVisibleProduct(state) {
  return state.visibleIds.map(id => getProduct(state, id))
}
