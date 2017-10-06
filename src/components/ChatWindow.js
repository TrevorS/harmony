import React from 'react';

import Message from './Message';
import MessageInput from './MessageInput';

import './ChatWindow.css';

const ChatWindow = ({ messages }) => (
  <div className="ChatWindow">
    <div className="ChatWindow-messages">
      {messages.map(({ handle, text }) =>
        <Message key={handle + text} handle={handle} text={text} />)}
    </div>
    <div className="ChatWindow-input">
      <MessageInput />
    </div>
  </div>
);

export default ChatWindow;
