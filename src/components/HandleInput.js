import React, { Component } from 'react';

import './HandleInput.css';

class HandleInput extends Component {
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

    const handle = this.state.value;

    this.props.executeJoinChat(handle);

    const value = '';
    this.setState({ value });
  }

  render() {
    return (
      <form className="HandleInput" onSubmit={this.handleOnSubmit}>
        <input
          className="HandleInput-input"
          value={this.state.value}
          onChange={this.handleOnChange}
        />

        <button className="MessageInput-submit">
          Choose
        </button>
      </form>
    );
  }
}

export default HandleInput;
