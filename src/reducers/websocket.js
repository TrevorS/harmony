import {
  WEBSOCKET_OPEN,
  WEBSOCKET_CLOSE,
  WEBSOCKET_MESSAGE,
} from '../actions/types';

const initialState = {
  isOpen: false,
};

const handleWebsocketOpen = state => ({
  ...state,
  isOpen: true,
});

const handleWebsocketClose = state => ({
  ...state,
  isOpen: false,
});

const handleWebsocketMessage = state => state;

const websocket = (state = initialState, action) => {
  switch (action.type) {
    case WEBSOCKET_OPEN:
      return handleWebsocketOpen(state);

    case WEBSOCKET_CLOSE:
      return handleWebsocketClose(state);

    case WEBSOCKET_MESSAGE:
      return handleWebsocketMessage(state);

    default:
      return state;
  }
};

export default websocket;
