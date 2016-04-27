import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
} from '../../constants';
import http from '../../utils/HttpClient';

export function loadPost(title) {
  const request = encodeURI(JSON.stringify({
    title: title
  }))
  return {
    // Types of actions to emit before and after
    types: [LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE],

    // Check the cache (optional):
    // shouldCallAPI: (state) => shouldFetchPost(state),

    // Perform the fetching:
    callAPI: () => http.post(`/api/article/${title}`, { request: request }),

    // Arguments to inject in begin/end actions
    payload: { title: title },
  }
}