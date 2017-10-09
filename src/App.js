import React, { Component } from 'react';

import UserWindowContainer from './containers/UserWindowContainer';
import ChatWindowContainer from './containers/ChatWindowContainer';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.executeJoinChat('Trevor');
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
