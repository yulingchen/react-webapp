import 'isomorphic-fetch'
import * as types from '../constants/ActionTypes.js'

// 获取商品
function receiveProduct(product) {
  return {
    type: types.RECEIVE_PRODUCT,
    product
  }
}

export function getProduct(api) {
  return dispatch => {
    fetch(`http://caixie.net/react/static/_Products${api}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveProduct(json))
      })
      .catch(error => console.log(error))
  }
}

// 加入购物车
function addToCartUnsafe(productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart(productId) {
  return (dispatch, getState) => {
    if (getState().product.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}

//交易
export function checkout(product) {
  return (dispatch, getState) => {
    const cart = getState().cart

    dispatch({
      type: types.CHECKOUT_REQUEST
    })
    fetch(spellApi('http://caixie.net/react/static/'),{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        args: product
      })
    })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: types.CHECKOUT_SUCCESS,
        json
      })
    })
    .catch(error => console.log(error))
  }
}