import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
} from '../actions/types';

const initialState = {
  messages: [],
  messageToSend: null,
  sendingMessage: false,
};

const createMessage = ({ handle, text }) => ({
  handle,
  text,
});

const messaging = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messageToSend: createMessage(action),
        sendingMessage: true,
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          createMessage(action),
        ],
      };
    default:
      return state;
  }
};

export default messaging;
