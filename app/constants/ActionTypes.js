
/**
 * ==============
 * Nav
 */
export const CHANGE_PATH = 'CHANGE_PATH'



/**
 * ==============
 * cart
 */
export const ADD_TO_CART = 'ADD_TO_CART' //加入购物车
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST' //发起交易请求
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS' //交易成功
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE' //交易失败
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT' //获取单个商品信息


/**
 * ====================
 * App
 * ====================
 */
export const GET_TOASTER = 'GET_TOASTER' // 获取提示信息
export const GET_SYSTEMINFO = 'GET_SYSTEMINFO' // 获取系统信息

/**
 * ====================
 * 无操作数据
 * ====================
 */
export const REQUEST_POST = 'REQUEST_POST' // 发送api请求
export const REQUEST_DONE = 'REQUEST_DONE'  // 请求完成
export const REQUEST_FAIL = 'REQUEST_FAIL'  // 请求失败
export const REQUEST_RECEIVE = 'REQUEST_RECEIVE' // 获取请求结果

/**
 * ====================
 * 购买流程
 * ====================
 */
export const GET_COMMODITY = 'GET_COMMODITY' // 获取商品所有信息
export const SEL_MAIN_ATT = 'SEL_MAIN_ATT' // 选择商品主要属性
export const SEL_SECOND_ATT = 'SEL_SECOND_ATT' // 选择商品次要属性
export const ADD_COM_NUM = 'ADD_COM_NUM' // 增加购买数量
export const CUT_COM_NUM = 'CUT_COM_NUM' // 减少购买数量
export const SEND_TO_CART = 'SEND_TO_CART' // 加入购物车
export const THROW_OUT_CART = 'THROW_OUT_CART' // 从购物车中删除
export const CHECKOUT_CART = 'CHECKOUT_CART' // 结算
