/**
 * goods
 * 
 * 商品
 *
 * 商品列表、单个商品详情
 * 
 */
import 'isomorphic-fetch'
import * as types from '../constants/ActionTypes.js'

function receiveGoodsList(goodsList) {
  return {
    type: types.RECEIVE_GOODS_LIST,
    goodsList
  }
}

export function requestGoodsList(api,args) {
  return dispatch => {
    fetch(`http://caixie.net/react/static/_goodsCate${api}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveGoodsList(json))
      })
      .catch(error => console.log(error))
  }
}

function receiveGoodsDetail(goodsDetail) {
  return {
    type: types.RECEIVE_GOODS_DETAIL,
    goodsDetail
  }
}

export function requestGoodsDeatil(api,args) {
  return dispatch => {
    fetch(`http://caixie.net/react/static/_goods${api}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveGoodsDetail(json))
        dispatch(clearGoodsMixin())
      })
      .catch(error => console.log(error))
  }
}

function selectGoodsAtt(goodsAtt) {
  return {
    type: types.SELECT_GOODS_ATT,
    goodsAtt
  }
}

export function mixinGoodsCart(attIndex) {
  return (dispatch, getState) => {
    const goodsDetail = getState().goodsDetail
    dispatch(selectGoodsAtt(goodsDetail.attribute[attIndex]))
  }
}

function addGoodsCount(goodsCart,count) {
  return {
    type: types.ADD_GOODS_COUNT,
    goodsCart,
    count
  }
}
function cutGoodsCount(goodsCart,count) {
  return {
    type: types.CUT_GOODS_COUNT,
    goodsCart,
    count
  }
}
export function goodsCount(count) {
  return (dispatch, getState) => {
    const goodsCart = getState().goodsCart
    if (count < 0 ) {
      dispatch(cutGoodsCount(goodsCart,count))
    } else if (count > 0) {
      dispatch(addGoodsCount(goodsCart,count))
    }
  }
}
function clearGoodsMixin() {
  return {
    type: types.CLEAR_GOODS_MIXIN
  }
}

function receiveCart(cart,detail) {
  return {
    type: types.RECEIVE_CART,
    cart,
    detail
  }
}

export function toCart() {
  return (dispatch,getState) => {
    const goodsCart = getState().goodsCart
    const goodsDetail = getState().goodsDetail
    if (goodsCart.cartcount > 0) {
      dispatch(receiveCart(goodsCart,goodsDetail))
    }
  }
}