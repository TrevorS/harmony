import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppContainer from './containers/AppContainer';
import HarmonyReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';
import DocumentStyle from './utils/DocumentStyle';

import './index.css';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;

const store = createStore(
  HarmonyReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const ds = new DocumentStyle();
ds.setOneHundredPercentHeight();

const Harmony = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<Harmony />, document.getElementById('root'));
registerServiceWorker();
