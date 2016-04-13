if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

// path '/' App`s index page
import PostList from '../PostList'

export default function createRoutes(store) {
  return {
    path: '/',
    getComponents(location, cb) {
      require.ensure([
          './components/App',
          './reducer',
        ], (require) => {
          let AppPage = require('./components/App').default
          let environment = require('./reducer').default
          cb(null, AppPage)
        })
    },
    // index page
    indexRoute: {
      component: PostList,
    }
  }
}