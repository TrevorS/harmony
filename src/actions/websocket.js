import {
  WEBSOCKET_CONNECT,
  WEBSOCKET_DISCONNECT,
  WEBSOCKET_SEND,
  WEBSOCKET_OPEN,
  WEBSOCKET_CLOSE,
  WEBSOCKET_MESSAGE,
} from './types';

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
