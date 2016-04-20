if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);
import { injectAsyncReducer } from '../../store';

export default function createRoutes(store) {
  return {
    path: 'article/:aid',
    getComponents(location, cb) {
      require.ensure([
          './Article',
          './reducer',
        ], (require) => {
          let Article = require('./Article').default;
          let currentArticle = require('./reducer').default;
          injectAsyncReducer(store, 'currentArticle', currentArticle);
          cb(null, Article);
        })
    }
  }
}
