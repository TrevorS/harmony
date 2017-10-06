import {
  JOIN_CHAT,
  LEAVE_CHAT,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
} from './actionTypes';

const joinChat = user => ({
  type: JOIN_CHAT,
  user,
});

const leaveChat = user => ({
  type: LEAVE_CHAT,
  user,
});

const sendMessage = text => ({
  type: SEND_MESSAGE,
  text,
});

const receiveMessage = text => ({
  type: RECEIVE_MESSAGE,
  text,
});

export {
  joinChat,
  leaveChat,
  sendMessage,
  receiveMessage,
};
