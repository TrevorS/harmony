import { WEBSOCKET_MESSAGE } from '../actions/types';

const initialState = {
  messages: [],
};

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
    case WEBSOCKET_MESSAGE:
      return handleWebsocketMessage(state, action);

    default:
      return state;
  }
};

export default messaging;
