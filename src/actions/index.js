import {
  JOIN_CHAT,
  LEAVE_CHAT,
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
} from './types';

const joinChat = handle => ({
  type: JOIN_CHAT,
  handle,
});

const leaveChat = () => ({
  type: LEAVE_CHAT,
});

const sendMessage = (handle, text) => ({
  type: SEND_MESSAGE,
  handle,
  text,
});

const receiveMessage = (handle, text) => ({
  type: RECEIVE_MESSAGE,
  handle,
  text,
});

export {
  joinChat,
  leaveChat,
  sendMessage,
  receiveMessage,
};
