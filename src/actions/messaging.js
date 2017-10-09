import { SEND_MESSAGE, RECEIVE_MESSAGES } from './types';

const sendMessage = text => ({
  type: SEND_MESSAGE,
  text,
});

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages,
});

export { sendMessage, receiveMessages };
