/**
 * goods
 * 
 * 商品
 *
 * 商品列表、单个商品详情
 * 
 */

import {
  RECEIVE_GOODS_LIST,
  REQUEST_GOODS_LIST,
  RECEIVE_GOODS_DETAIL,
  REQUEST_GOODS_DETAIL,
  SELECT_GOODS_ATT,
  ADD_GOODS_COUNT,
  CUT_GOODS_COUNT,
  CLEAR_GOODS_MIXIN,
  RECEIVE_CART
} from '../constants/ActionTypes.js'


// const initialState = [
//   {
//     id: Number,
//     cate: String
//     title: String,
//     subtitle: String,
//     gallery: String,
//     price: Number,
//     cut: Number
//   }
// ]

export function goodsList(state = [], action) {
  switch (action.type) {
    case RECEIVE_GOODS_LIST:
      return action.goodsList
    // case REQUEST_GOODS_LIST:
    //   return
    default:
      return state
  }
}

// const initialState = {
//   "id": 10001,
//   "description": {
//     "gallery": "",
//     "title": "标题",
//     "subtitle": "二级标题",
//     "attribute": "商品属性描述",
//     "description": "商品图文描述"
//   },
//   "attribute": [
//     {
//       "name": "属性名称",
//       "inventory": 10,
//       "price": 100
//     }
//   ]
// }
export function goodsDetail(state = {}, action) {
  switch (action.type) {
    // case REQUEST_GOODS_DETAIL:
    //   return action.goodsList
    case RECEIVE_GOODS_DETAIL:
      return action.goodsDetail
    default:
      return state
  }
}

export function goodsCart(state = {}, action) {
  switch (action.type) {
    case SELECT_GOODS_ATT:
      let cartData = action.goodsAtt
      if (cartData.inventory > 0) {
        cartData.cartcount = 1
      } else {
        cartData.cartcount = 0
      }
      return cartData
    case ADD_GOODS_COUNT:
      const {inventory,cartcount} = state
      const {count} = action
      let cartCount
      if (cartcount + count <= inventory) {
        cartCount = state.cartcount + 1
        return {
          ...state,
          cartcount: cartCount
        }
      }
      return state
    case CUT_GOODS_COUNT:
      const cutData = state
      let cutCount
      if (cutData.cartcount + action.count > 0) {
        cutCount = cutData.cartcount - 1
        return {
          ...state,
          cartcount: cutCount
        }
      }
      return state
    case CLEAR_GOODS_MIXIN:
      return {}
    default:
      return state
  }
}

// const cartInitialState = [
//   {
//     title: 'String',
//     price: 0,
//     att: 'String',
//     count: 0
//   },
//   {
//     title: 'String',
//     price: 0,
//     att: 'String',
//     count: 0
//   },
// ]

export function goodsTocart(state = {mixin: []}, action) {
  switch (action.type) {
    case RECEIVE_CART:
      if (!state[action.detail.id + action.cart.name]) {
        state.mixin.push(action.detail.id + action.cart.name)
      }
      return {
        ...state,
        [action.detail.id + action.cart.name]: {
          id: action.detail.id,
          att: action.cart.name,
          price: action.cart.price,
          count: action.cart.cartcount,
          title: action.detail.title
        }
      }
    default:
      return state
  }
}