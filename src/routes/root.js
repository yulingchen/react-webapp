// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../store'

export default function createRoutes(store) {
  const root = {
    path: '/',
    getComponents(location, cb) {
      require.ensure([
          './App/App',
        ], (require) => {
          let AppPage = require('./App/App').default
          cb(null, AppPage)
        })
    },
    getChildRoutes(location, cb) {
      require.ensure([], (require) => {
        cb(null, [

          // other pages
          require('./Article').default(store),

          // 404
          require('./NotFound').default
        ])
      })
    },
    // index page
    indexRoute: {
      component: require('./Home/Home').default,
    }
  }

  return root
}
