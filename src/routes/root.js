// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes(store) {
  const root = {
    getChildRoutes(location, cb) {
      require.ensure([], (require) => {
        cb(null, [

          // App Entry, path default '/'
          require('./App').default(store),

          // other pages
          require('./About').default, // no need to modify store, no reducer
          require('./Post').default(store), // add async reducer

          // 404
          require('./NotFound').default
        ])
      })
    }
  }

  return root
}
