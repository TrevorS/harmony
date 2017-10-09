import {
  SEND_MESSAGE,
  RECEIVE_MESSAGES,
} from '../actions/types';

const initialState = {
  messages: [],
};

const messaging = (state = initialState, action) => {
  switch (action.type) {
    // Use SEND_MESSAGE to handle messaging sending notification.
    case SEND_MESSAGE:
      return state;
    case RECEIVE_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default messaging;
