import { sendMessage, receiveMessages } from './messaging';
import { joinChat, leaveChat, receiveUsers } from './presence';

import Chat from '../chat';

const url = 'ws://localhost:4000/chat';

let chat;

const executeSendMessage = text =>
  (dispatch) => {
    chat.sendMessage(text);

    dispatch(sendMessage(text));
  };

const executeReceiveData = data =>
  (dispatch) => {
    dispatch(receiveMessages(data.messages));
    dispatch(receiveUsers(data.users));
  };

const executeJoinChat = handle =>
  (dispatch) => {
    chat = new Chat(url, handle);

    chat.setOnMessage(executeReceiveData);

    chat.connect();

    return dispatch(joinChat(handle));
  };

const executeLeaveChat = () =>
  (dispatch) => {
    chat.leave();

    dispatch(leaveChat());
  };

export {
  executeJoinChat,
  executeLeaveChat,
  executeSendMessage,
};
