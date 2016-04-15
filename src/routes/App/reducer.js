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

const initialState = {
  isMobile: false,
  height: null,
  width: null
}

export function environment(state = initialState, action) {
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
function pagesMixin(state, payload) {
  let WINDOWSTORE = state
  switch (payload.action) {
    case 'PUSH':
      if (true) {}
      return state
    case 'POP':
      return state
    case 'REPLACE':
      return state
    default:
      return state
  }
}

export function WINDOWSTORE(state = [], action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      // console.log('window.scrollY',window.scrollY)
      return pagesMixin(state, action.payload)
    default:
      return state
  }
}
