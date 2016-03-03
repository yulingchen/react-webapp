import {
  GET_COMMODITY
} from '../constants/ActionTypes.js'

const initialState = {
  "id": 10001,
  "description": {
    "gallery": [
      {
        "src": "http://localhost:8888/timg_1.jpeg",
        "alt": "描述"
      }
    ],
    "title": "标题",
    "subtitle": "二级标题",
    "attribute": "商品属性描述",
    "description": "商品图文描述"
  },
  "attribute": [
    {
      "name": "属性名称",
      "inventory": 10,
      "price": 100
    }
  ]
}

export default function commodity(state=initialState, action) {
  switch (action.type) {
    case GET_COMMODITY:
      return state
    default:
      return state
  }
}