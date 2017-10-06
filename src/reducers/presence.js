import {
  JOIN_CHAT,
  LEAVE_CHAT,
} from '../actions/actionTypes';

const initialState = {
  handle: null,
  users: [],
  isConnected: false,
};

const createUser = ({ handle }) => ({
  handle,
});

const presence = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_CHAT:
      return {
        ...state,
        handle: action.handle,
        users: [
          ...state.users,
          createUser(action),
        ],
        isConnected: true,
      };
    case LEAVE_CHAT:
      return {
        ...state,
        handle: null,
        users: [],
        isConnected: false,
      };
    default:
      return state;
  }
};

export default presence;
