/**
 * 购买流程
 * 
 * 商品信息 => 选择属性、副属性 => 数量 => 地址 => check
 * 
 */

import 'isomorphic-fetch'

import * as types from '../constants/ActionTypes.js'

// 获取商品信息
function receiveCommodity(commodity) {
  return {
    type: types.GET_COMMODITY,
    commodity
  }
}

export function getCommodity(api,args) {
  return dispatch => {
    fetch(`http://localhost:8888/_Products${api}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveCommodity(json))
      })
      .catch(error => console.log(error))
  }
}