import {
  SEND_MESSAGE,
  WEBSOCKET_MESSAGE,
} from '../actions/types';

const initialState = {
  messages: [],
};

const handleSendMessage = state => state;

const handleWebsocketMessage = (state, { data }) => {
  if (data && data.messages) {
    return {
      ...state,
      messages: data.messages,
    };
  }

  return state;
};

const messaging = (state = initialState, action) => {
  switch (action.type) {
    // TODO: Use SEND_MESSAGE to handle messaging sending notification.
    case SEND_MESSAGE:
      return handleSendMessage(state);

    case WEBSOCKET_MESSAGE:
      return handleWebsocketMessage(state, action);

    default:
      return state;
  }
};

export default messaging;
