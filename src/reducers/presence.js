import {
  JOIN_CHAT,
  LEAVE_CHAT,
  RECEIVE_USERS,
} from '../actions/types';

const initialState = {
  handle: null,
  users: [],
  isConnected: false,
};

const presence = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_CHAT:
      return {
        ...state,
        handle: action.handle,
        isConnected: true,
      };
    case LEAVE_CHAT:
      return {
        ...state,
        handle: null,
        users: [],
        isConnected: false,
      };
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};

export default presence;
