import {combineReducers} from 'redux'
import environment from './environment.js'

import navigator from './navigator.js'

import { default as commodity} from './buy.js'

import { toaster, systemInfo } from './app.js'
import { prueData } from './request.js'

import { goodsList, goodsDetail, goodsCart, goodsTocart} from './goods.js'

const rootReducer = combineReducers({
  environment,
  navigator,
  commodity,
  toaster,
  systemInfo,
  prueData,
  goodsList,
  goodsDetail,
  goodsCart,
  goodsTocart
})

export default rootReducer