import React from 'react';

import MessageInputContainer from '../containers/MessageInputContainer';

import Message from './Message';

import './ChatWindow.css';

const ChatWindow = ({ messages }) => (
  <div className="ChatWindow">
    <div className="ChatWindow-messages">
      {messages.map(({ handle, text }) =>
        <Message key={handle + text} handle={handle} text={text} />)}
    </div>
    <div className="ChatWindow-input">
      <MessageInputContainer />
    </div>
  </div>
);

export default ChatWindow;
