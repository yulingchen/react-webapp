// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../store'

export default function createRoutes(store) {
  const root = {
    path: '/',
    getComponents(location, cb) {
      require.ensure([
          './App/components/App',
        ], (require) => {
          let AppPage = require('./App/components/App').default
          cb(null, AppPage)
        })
    },
    getChildRoutes(location, cb) {
      require.ensure([], (require) => {
        cb(null, [

          // other pages
          require('./About').default, // no need to modify store, no reducer
          require('./Post').default(store), // add async reducer

          // 404
          require('./NotFound').default
        ])
      })
    },
    // index page
    indexRoute: {
      component: require('./Index').default,
    }
  }

  return root
}
