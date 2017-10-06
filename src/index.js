import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import HarmonyReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';
import DocumentStyle from './utils/DocumentStyle';

import { joinChat, sendMessage, receiveMessage } from './actions';

import './index.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  HarmonyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const ds = new DocumentStyle();
ds.setOneHundredPercentHeight();

const Harmony = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Harmony />, document.getElementById('root'));
registerServiceWorker();

store.dispatch(joinChat('Trevor'));
store.dispatch(joinChat('Faith-Anne'));

store.dispatch(sendMessage('Trevor', 'Hello!'));

store.dispatch(receiveMessage('Trevor', 'Hello!'));
store.dispatch(receiveMessage('Faith-Anne', 'Hi!'));
