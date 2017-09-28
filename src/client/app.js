import React from 'react';
import { render } from 'react-dom';

// Components
import App from './AppContainer.js';

// Redux
import { Provider } from 'react-redux';
import createStore from '../shared/redux/createStore.js';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const store = createStore(history);

const rootEl = document.getElementById('root');
render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootEl
);
