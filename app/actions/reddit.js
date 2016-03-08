import 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

const APP_DATA = {}

// 选择需要显示的reddit
export const selectReddit = (reddit) => {
  return {
    type: SELECT_REDDIT,
    reddit
  }
}

// 刷新
export const invalidateReddit = (reddit) => {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  }
}
// ========================================================================
// 请求部分
// ========================================================================
// request 发送请求
const requestPosts = (reddit) => {
  return {
    type: REQUEST_POSTS,
    reddit
  }
}

// receive 收到请求响应
const receivePosts = (reddit, json) => {
  return {
    type: RECEIVE_POSTS,
    reddit: reddit,
    posts: json.data.map(child => child),
    receivedAt: Date.now()
  }
}

const fetchPosts = (reddit) => {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`http://caixie.net/react/static/_${reddit}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePosts(reddit, json))
      })
      .catch(error => console.log(error))
  }
}

const shouldFetchPosts = (state, reddit) => {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = (reddit) => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit))
    }
  }
}



