import {
  WEBSOCKET_OPEN,
  WEBSOCKET_CLOSE,
  WEBSOCKET_MESSAGE,
} from '../actions/types';

const initialState = {
  isOpen: false,
};

const websocket = (state = initialState, action) => {
  switch (action.type) {
    case WEBSOCKET_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case WEBSOCKET_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    case WEBSOCKET_MESSAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default websocket;
