import {
  joinChat,
  leaveChat,
} from './presence';

import { sendMessage } from './messaging';
import { websocketSend } from './websocket';

const buildData = (action, data) => {
  if (!data) {
    return action;
  }

  return JSON.stringify({ action, data });
};

const executeJoinChat = handle =>
  (dispatch) => {
    const data = buildData('JOIN_CHAT', handle);

    dispatch(joinChat(handle));
    dispatch(websocketSend(data));
  };

const executeLeaveChat = () =>
  (dispatch) => {
    const data = buildData('LEAVE_CHAT');

    dispatch(leaveChat());
    dispatch(websocketSend(data));
  };

const executeSendMessage = (handle, text) =>
  (dispatch) => {
    const data = buildData('SEND_MESSAGE', { handle, text });

    dispatch(sendMessage(text));
    dispatch(websocketSend(data));
  };

export {
  executeJoinChat,
  executeLeaveChat,
  executeSendMessage,
};
