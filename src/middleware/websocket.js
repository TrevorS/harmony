import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_SEND,
} from '../actions/types';

import {
  websocketOpen,
  websocketClose,
  websocketMessage,
} from '../actions/websocket';

import { executeLeaveChat } from '../actions/';

let websocket;

const websocketMiddleware = store => next => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      websocket = new WebSocket(action.uri);

      websocket.onopen = () => store.dispatch(websocketOpen());
      websocket.onclose = event => store.dispatch(websocketClose(event));
      websocket.onmessage = event => store.dispatch(websocketMessage(event));

      window.onbeforeunload = () => store.dispatch(executeLeaveChat());

      break;

    case WEBSOCKET_DISCONNECT:
      websocket.close();

      websocket = null;

      break;

    case WEBSOCKET_SEND:
      websocket.send(action.data);

      break;

    default:
      break;
  }

  return next(action);
};

export default websocketMiddleware;
