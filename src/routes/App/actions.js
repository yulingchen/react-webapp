import * as types from '../../constants.js'


/**
 * environment
 * 
 * 所属环境
 * 
 */
function changeIsMobile(isMobile) {
  return {
    type: types.CHANGE_IS_MOBILE,
    isMobile
  }
}
export function changeWidthAndHeight(height, width) {
  return {
    type: types.CHANGE_WIDTH_AND_HEIGHT,
    height,
    width
  }
}
export function initEnvironment() {
  return dispatch => {
    // 判断硬件
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)
    if (isMobile) {
      // to do somthing
    }
    // 做出改变
    dispatch(changeIsMobile(isMobile))
    dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth))
    // 改变窗口时
    window.onresize = () => {
      dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth))
    }
  }
}


/**
 * [pagesInitialState 页面存储]
 * @param  {[type]} store [数据流]
 * @param  {[type]} scoll [滚动位置]
 */
export function pagesInitialState(store, scoll) {
  return {
    type: types.PAGES_INITSTATE,
    store,
    scoll
  }
}