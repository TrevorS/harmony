import {
  JOIN_CHAT,
  LEAVE_CHAT,
  RECEIVE_USERS,
} from './types';

const joinChat = handle => ({
  type: JOIN_CHAT,
  handle,
});

const leaveChat = () => ({
  type: LEAVE_CHAT,
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export { joinChat, leaveChat, receiveUsers };
