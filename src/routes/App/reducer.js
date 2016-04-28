/**
 * environment
 * 
 * 所属环境
 * 
 */

import {
  CHANGE_IS_MOBILE,
  CHANGE_WIDTH_AND_HEIGHT
} from '../../constants.js'

import { getScrollTop } from '../../utils/WindowDocument'

export function environment(state = {
  isMobile: false,
  height: null,
  width: null
}, action) {
  switch (action.type) {
    case CHANGE_IS_MOBILE:
      return {
        ...state,
        ...{
          isMobile: action.isMobile
        }
      }
    case CHANGE_WIDTH_AND_HEIGHT:
      return {
        ...state,
        ...{
          height: action.height,
          width: action.width
        }
      }
    default:
      return state
  }
}


/**
 * WINDOWSTORE
 *
 * 存储 : 路由 + 数据流 + window对象
 * 
 */

export function WINDOWSTORE(state = {
  routes: []
}, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      console.log('ScrollTop',getScrollTop())
      return state
    default:
      return state
  }
}
