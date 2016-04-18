import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE
} from '../../constants';

import http from '../../utils/HttpClient';

export function loadArticles(currentPage) {
  console.log('currentPage==========>',currentPage)
  return {
    // Types of actions to emit before and after
    types: [LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],

    // Check the cache (optional):
    // shouldCallAPI: (state) => state.posts.data.length === 0 && !state.posts.isLoading,

    // Perform the fetching:
    callAPI: () => http.post('/api/articles', { currentPage: currentPage }),

    // Arguments to inject in begin/end actions
    payload: { currentPage: currentPage },
  }
}
