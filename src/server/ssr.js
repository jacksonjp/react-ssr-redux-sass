
// Node Modules
import { matchPath } from 'react-router-dom';

// Libraries
import React from 'react';
import { renderToString } from 'react-dom/server';

// Redux
// import {push} from 'react-router-redux';
import createStore from '../shared/redux/createStore';
import createHistory from 'history/createMemoryHistory';

// Components
import Html from './html';
import routes from '../shared/routes/routes';

function renderApp(url, res, store, assets) {
  const context = {};

  const html = renderToString(
    <Html
      title="Create React App, SSR, Redux SASS"
      store={store}
      url={url}
      context={context}
      assets={assets}
    />
  );

  res.send(`<!DOCTYPE html>${html}`);
}

export const renderPage = function (req, res) {
  const history = createHistory();
  const store = createStore(history);

  const assets = require('../../build/asset-manifest.json');

  // inside a request
  const promises = [];
  // use `some` to imitate `<Switch>` behavior of selecting only
  // the first to match
  routes.some((route) => {
    // use `matchPath` here
    const match = matchPath(req.url, route);
    if (match) {
      const fetchData = route.component.fetchData;
      if (fetchData instanceof Function) promises.push(fetchData(store));
    } else {
      promises.push(Promise.resolve(null));
    }
    return match;
  });

  Promise.all(promises).then(() => {
    renderApp(req.url, res, store, assets);
  });
};

export default renderPage;
