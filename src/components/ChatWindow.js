import React, { Component } from 'react';

import Message from './Message';
import MessageInput from './MessageInput';

import './ChatWindow.css';

class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(text) {
    const { handle, sendMessage } = this.props;

    sendMessage(handle, text);
  }

  render() {
    const { messages } = this.props;

    return (
      <div className="ChatWindow">
        <div className="ChatWindow-messages">
          {messages.map(({ handle, text }) =>
            <Message key={handle + text} handle={handle} text={text} />)}
        </div>
        <div className="ChatWindow-input">
          <MessageInput handleMessage={this.handleMessage} />
        </div>
      </div>
    );
  }
}

export default ChatWindow;
