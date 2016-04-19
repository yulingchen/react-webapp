import * as types from '../../constants';
import update from 'react/lib/update';

export default function currentArticle(state = {
  data: {},
}, action) {
  switch (action.type) {
    case 'mixinArticle':
      return update(state, {
        isLoading: { $set: true },
        error: { $set: null }
      });
    default:
      return state;
  }
}
