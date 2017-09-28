
// Libraries
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
// Redux
import { Provider } from 'react-redux';

class Html extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object,
    context: PropTypes.object
  };

  render() {
    const { title, store, assets, url, context } = this.props;
    const state = store.getState();
    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
    const Layout = require(`../../build/${assets['prerender.js']}`).default;
    const root = renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Layout />
        </StaticRouter>
      </Provider>
    );

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="stylesheet" href={assets['main.css']} type="text/css" />
          <link rel="manifest" href="/static/manifest.json" />
        </head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          <div id="root" dangerouslySetInnerHTML={{ __html: root }} />
        </body>
      </html>
    );
  }
}

export default Html;
