/**
 * navigator
 * 
 * 路由 (未完成)
 * 
 */

import * as types from '../constants/ActionTypes.js'

function mixinPath(route,inRouteState) {
  return {
    type: types.MIXIN_PATH,
    route,
    inRouteState
  }
}

// function changePath(route) {
//   return {
//     type: types.CHANGE_PATH,
//     route
//   }
// }

export function pathTo(route,inRouteState = true) {
  return dispatch => {
    // dispatch(changePath(route))
    dispatch(mixinPath(route, inRouteState))
  }
}

export function pathBack(backRoute) {
  return {
    type: types.BACK_PATH,
    backRoute
  }
}