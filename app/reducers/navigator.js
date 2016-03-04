/**
 * navigator
 * 
 * 路由 (未完成)
 * 
 */

import {
  CHANGE_PATH,
  MIXIN_PATH,
  BACK_PATH
} from '../constants/ActionTypes.js'

// const initialState = {
//   mixin: ["routeA","routeB","routeC",...],
//   store: {
//     "route": "inRouteState",
//     "route": "inRouteState",
//     ...
//   }
//   back: Number
// }
const initialState = {
  mixin: [],
  store: {},
  back: 0
}
export default function navigator(state = initialState, action) {
  switch (action.type) {
    case MIXIN_PATH:
      if (state.mixin.indexOf(action.route) === -1) {
        state.mixin.push(action)
        state.store[action.route] = action.inRouteState
      }
      return state
    case BACK_PATH:
      let back
      if (state.mixin.indexOf(action.backRoute) != -1) {

      } else {
        console.log('state.mixin.length',state.mixin.length)

        for (var i = state.mixin.length; i > 0; i--) {
          console.log('state.mixin[i-1]',state.mixin[i-1].route)
          if (state.store[state.mixin[i-1].route] === true) {
            back = state.mixin.length - i + 1
            console.log('aaaaaaa')
          }
        }
      }
      const a = {
        ...state,
        back
      }
      console.log(a)
      return a
    default:
      return state
  }
}