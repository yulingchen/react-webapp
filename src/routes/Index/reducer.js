import * as types from '../../constants';
import update from 'react/lib/update';

export default function articles(state = {
  data: {
    articles: [],
    currentPage: null,
    allPages: null,
    allNum: null,
    maxResult: null
  },
  lastFetched: null,
  isLoading: false,
  error: null,
}, action) {
  switch (action.type) {
    case types.LOAD_POSTS_REQUEST:
      return update(state, {
        isLoading: { $set: true },
      });
    case types.LOAD_POSTS_SUCCESS:
      return update(state, {
        data: {
          articles: {
            $push: action.body.contentlist
          },
          allPages: {
            $set: action.body.allPages
          },
          currentPage: {
            $set: action.body.currentPage
          }
        },
        lastFetched: { $set: action.lastFetched },
        isLoading: { $set: false },
      });
    case types.LOAD_POSTS_FAILURE:
      return update(state, {
        error: { $set: action.error },
      });
    default:
      return state;
  }
}
