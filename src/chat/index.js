import {
  OK,
  PING,
  PONG,
  JOIN_CHAT,
  LEAVE_CHAT,
  SEND_MESSAGE,
} from './actions';

import { CONNECTING } from './states';

const DEFAULT_KEEP_ALIVE_INTERVAL = 10000;

class Chat {
  constructor(url, handle, keepAliveInterval = DEFAULT_KEEP_ALIVE_INTERVAL) {
    this.url = url;
    this.handle = handle;
    this.keepAliveInterval = keepAliveInterval;
  }

  connect() {
    this.ws = new WebSocket(this.url);

    if (this.onMessageCallback) {
      this.ws.onmessage = this.onMessageCallback.bind(this);
    }

    this.ws.onopen = this.join.bind(this);
  }

  join() {
    this.send(JOIN_CHAT, this.handle);

    this.keepAlive();
  }

  leave() {
    this.send(LEAVE_CHAT, this.handle);

    clearTimeout(this.keepAliveId);

    this.ws.close();
  }

  sendMessage(text) {
    this.send(SEND_MESSAGE, { handle: this.handle, text });
  }

  setOnMessage(callback) {
    this.onMessageCallback = (event) => {
      if (event.data !== PONG && event.data !== OK) {
        const data = JSON.parse(event.data);

        callback(data);
      }
    };
  }

  send(action, data) {
    const payload = data === undefined ? action :
      JSON.stringify({ action, data });

    if (this.ws.readyState === CONNECTING) {
      setTimeout(() => this.send(action, data), 500);
    } else {
      this.ws.send(payload);
    }
  }

  keepAlive() {
    this.ping();

    this.keepAliveId = setTimeout(this.keepAlive.bind(this), this.keepAliveInterval);
  }

  ping() {
    this.send(PING);
  }
}

export default Chat;
