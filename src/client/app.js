//@flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

// Components
import App from './AppContainer';

// Redux
import createStore from '../shared/redux/createStore';

const history = createHistory();
const store = createStore(history);

const rootEl = document.getElementById('root');
render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootEl
);
