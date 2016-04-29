import * as types from '../../constants'
import update from 'react/lib/update'

export default function currentArticle(state = {
  lastFetched: null,
  isLoading: false,
  error: null,
  article: {},
}, action) {
  switch (action.type) {
    case types.LOAD_POST_REQUEST:
      return update(state, {
        isLoading: { $set: true },
        error: { $set: null }
      });
    case types.LOAD_POST_SUCCESS:
      if (action.body.contentlist[0]) {
        return update(state, {
          article: { $set: action.body.contentlist[0]},
          lastFetched: { $set: action.lastFetched },
          isLoading: { $set: false },
        })
      } else {
        return update(state, {
          error: { $set: '此文章暂时无法解析！！' },
        })
      }
    case types.LOAD_POST_FAILURE:
      return update(state, {
        error: { $set: action.error },
      });
    default:
      return state;
  }
}
