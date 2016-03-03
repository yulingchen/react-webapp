import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes.js'

const initialState = {
  addedIds: [],
  quantityById: {}
}

// 商品编号
function addedIds(state = initialState.addedIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      // 不存在此商品 ＝> 添加
      return [ ...state, action.productId]
    default:
      return state
  }
}
// 商品对应的数量
function quantityById(state = initialState.quantityById, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const {productId} = action

      // 若存在 => 默认 1
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

// 购物车的状态
export default function cart(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

// 获取某个商品的数量
export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0
}

// 获取所购买的商品
export function getAddedIds(state) {
  return state.addedIds
}