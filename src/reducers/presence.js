import {
  JOIN_CHAT,
  LEAVE_CHAT,
  WEBSOCKET_MESSAGE,
} from '../actions/types';

const initialState = {
  handle: null,
  users: [],
  isConnected: false,
};

const handleJoinChat = (state, { handle }) => ({
  ...state,
  isConnected: true,
  handle,
});

const handleLeaveChat = state => ({
  ...state,
  ...initialState,
});

const handleWebsocketMessage = (state, { data }) => {
  if (data && data.users) {
    return {
      ...state,
      users: data.users,
    };
  }

  return state;
};

const presence = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_CHAT:
      return handleJoinChat(state, action);

    case LEAVE_CHAT:
      return handleLeaveChat(state);

    case WEBSOCKET_MESSAGE:
      return handleWebsocketMessage(state, action);

    default:
      return state;
  }
};

export default presence;
