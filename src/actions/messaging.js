import { SEND_MESSAGE } from './types';

const sendMessage = text => ({
  type: SEND_MESSAGE,
  text,
});

// eslint-disable-next-line import/prefer-default-export
export { sendMessage };
