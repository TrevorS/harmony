import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_SEND,
  WEBSOCKET_OPEN,
  WEBSOCKET_CLOSE,
  WEBSOCKET_MESSAGE,
  WEBSOCKET_PONG,
  WEBSOCKET_OK,
} from './types';

const shouldIgnore = ({ data }) =>
  data === WEBSOCKET_PONG || data === WEBSOCKET_OK;

const parseData = (event) => {
  if (shouldIgnore(event)) {
    return null;
  }

  return JSON.parse(event.data);
};

const websocketConnect = uri => ({
  type: WEBSOCKET_CONNECT,
  uri,
});

const websocketDisconnect = () => ({
  type: WEBSOCKET_DISCONNECT,
});

const websocketSend = data => ({
  type: WEBSOCKET_SEND,
  data,
});

const websocketOpen = () => ({
  type: WEBSOCKET_OPEN,
});

const websocketClose = event => ({
  type: WEBSOCKET_CLOSE,
  event,
});

const websocketMessage = event => ({
  type: WEBSOCKET_MESSAGE,
  data: parseData(event),
  event,
});

export {
  websocketConnect,
  websocketDisconnect,
  websocketSend,
  websocketOpen,
  websocketClose,
  websocketMessage,
};
