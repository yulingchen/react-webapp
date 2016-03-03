import {
  SELECT_REDDIT, INVALIDATE_REDDIT,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/reddit.js'

export function selectedReddit (state = 'Carousel', action) {
  switch (action.type) {
    case SELECT_REDDIT:
      return action.reddit
    default:
      return state
  }
}


const posts = (state = {
  isFetching: false, // isFetching 来显示进度条
  didInvalidate: false, // didInvalidate 来标记数据是否过期
  items: [] // items 存放列表信息本身
}, action) => {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt // lastUpdated 来存放数据最后更新时间
      })
    default:
      return state
  }
}
// ========================================================================
// 在实际应用中，你还需要存放 fetchedPageCount 和 nextPageUrl 这样分页相关的 state。
// ========================================================================

export function postsByReddit (state = {}, action) {
  switch (action.type) {
    case INVALIDATE_REDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
    default:
      return state
  }
}
