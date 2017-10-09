import React, { Component } from 'react';

import './MessageInput.css';

class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    const value = event.target.value;

    this.setState({ value });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const handle = this.props.handle;
    const text = this.state.value;

    this.props.executeSendMessage(handle, text);

    const value = '';
    this.setState({ value });
  }

  render() {
    return (
      <form className="MessageInput" onSubmit={this.handleOnSubmit}>
        <input
          className="MessageInput-input"
          value={this.state.value}
          onChange={this.handleOnChange}
        />

        <button className="MessageInput-submit">
          Send
        </button>
      </form>
    );
  }
}

export default MessageInput;
