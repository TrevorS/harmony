import React from 'react';

import Message from './Message';
import MessageInput from './MessageInput';

import './ChatWindow.css';

const handleMessage = message =>
  console.log('message', message);

const ChatWindow = ({ messages }) => (
  <div className="ChatWindow">
    <div className="ChatWindow-messages">
      {messages.map(({ handle, text }) =>
        <Message key={handle + text} handle={handle} text={text} />)}
    </div>
    <div className="ChatWindow-input">
      <MessageInput handleMessage={handleMessage} />
    </div>
  </div>
);

export default ChatWindow;
