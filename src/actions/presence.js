import {
  JOIN_CHAT,
  LEAVE_CHAT,
} from './types';

const joinChat = handle => ({
  type: JOIN_CHAT,
  handle,
});

const leaveChat = () => ({
  type: LEAVE_CHAT,
});

export { joinChat, leaveChat };
