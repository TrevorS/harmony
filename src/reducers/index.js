import { combineReducers } from 'redux';

import {
  JOIN_CHAT,
  LEAVE_CHAT,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
} from '../actions/actionTypes';

const initialState = {
  name: null,
  messages: [],
  messageToSend: null,
  sendingMessage: false,
  isConnected: false,
};

const presence = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_CHAT:
      return {
        ...state,
        name: action.name,
        isConnected: true,
      };
    case LEAVE_CHAT:
      return {
        ...state,
        name: null,
        isConnected: false,
      };
    default:
      return state;
  }
};

const messaging = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messageToSend: action.text,
        sendingMessage: true,
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action.messages,
        ],
      };
    default:
      return state;
  }
};

const HarmonyReducer = combineReducers({
  presence,
  messaging,
});

export default HarmonyReducer;
