import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
} from '../../constants';
import http from '../../utils/HttpClient';

export function loadPost(title) {
  const params = {
    title: title
  }
  console.log(params)
  return {
    // Types of actions to emit before and after
    types: [LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE],

    // Check the cache (optional):
    // shouldCallAPI: (state) => shouldFetchPost(state),

    // Perform the fetching:
    callAPI: () => http.post(`/api/article/${title}`, { params: encodeURI(params) }),

    // Arguments to inject in begin/end actions
    payload: { title: title },
  }
}