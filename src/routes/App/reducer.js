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
