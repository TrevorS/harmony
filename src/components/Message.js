import React from 'react';

import './Message.css';

const Message = ({ handle, text }) => (
  <div className="Message">
    <span className="Message-handle">
      {handle}:
    </span>

    <span className="Message-text">
      {text}
    </span>
  </div>
);

export default Message;
