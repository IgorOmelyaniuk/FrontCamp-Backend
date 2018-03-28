import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';

import routes from '../client/routes';
import configureStore from '../client/store/configureStore';
import App from '../client/components/App';

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8>
        <title>React Server Side Rendering</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/reactBundle.js"></script>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const store = configureStore();

  const branch = matchRoutes(routes, req.url);
  const promises = branch.map(({ route, match }) => {
    const { fetchData } = route.component;

    if (!(fetchData instanceof Function)) {
      return Promise.resolve(null);
    }

    return fetchData(store.dispatch, match);
  });

  return Promise.all(promises)
    .then(() => {
      const context = {};
      const app = (
        <Provider store={store}>
          <StaticRouter location={req.url} context={context} >
            <App />
          </StaticRouter>
        </Provider>
      );

      const html = renderToString(app);

      if (context.url) {
        return res.redirect(context.url);
      }

      const preloadedState = store.getState();

      return res.send(renderFullPage(html, preloadedState));
    });
}

export default handleRender;