import React from 'react';

import './MessageInput.css';

const MessageInput = () => (
  <form className="MessageInput">
    <input className="MessageInput-input" />
    <button className="MessageInput-submit">
      Submit
    </button>
  </form>
);

export default MessageInput;
