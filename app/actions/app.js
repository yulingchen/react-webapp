/**
 * App
 * 
 * 提示信息、容器／系统规格
 * 
 */
import * as types from '../constants/ActionTypes.js'

function receiveToaster(toaster) {
  return {
    type: types.GET_TOASTER,
    toaster
  }
}

export function getToaster(message) {
  return dispatch => {
    dispatch(receiveToaster(message))
  }
}

function receiveSystemInfo(toaster) {
  return {
    type: types.GET_SYSTEMINFO,
    toaster
  }
}

export function getSystemInfo(message) {
  return dispatch => {
    dispatch(receiveSystemInfo(message))
  }
}