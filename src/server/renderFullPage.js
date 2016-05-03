
import serialize from 'serialize-javascript'

const renderFullPage = ( content, initialState, assets, isDeveloping ) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
         <link rel='stylesheet' type='text/css' href='/build/static/style.css' />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: window.INITIAL_STATE=${serialize(initialState)} }}
        <script src="${ isDeveloping ? '/build/static/vendor.js' : assets.vendor.js}"></script>
        <script src="${ isDeveloping ? '/build/static/main.js' : assets.main.js}"></script>
      </body>
    </html>
  `
}

export default renderFullPage