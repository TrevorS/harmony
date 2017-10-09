import React, { Component } from 'react';

import UserWindowContainer from '../containers/UserWindowContainer';
import ChatWindowContainer from '../containers/ChatWindowContainer';

import './App.css';

// TODO: Extract into config.
const uri = 'ws://localhost:4000/chat';

class App extends Component {
  componentDidMount() {
    this.props.websocketConnect(uri);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      // TODO: Use custom handle.
      this.props.executeJoinChat('Trevor');
      this.props.executeKeepAlive();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Harmony Chat</h1>
        </div>
        <div className="App-container">
          <div className="App-users">
            <UserWindowContainer />
          </div>

          <div className="App-chat">
            <ChatWindowContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
