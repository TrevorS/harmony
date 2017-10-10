import React, { Component } from 'react';

import HandleInputContainer from '../containers/HandleInputContainer';
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
      this.props.executeKeepAlive();
    }
  }

  render() {
    const hasSignedIn = this.props.handle !== null;

    return (
      <div className="App">
        <div className="App-header">
          <h1>Harmony Chat</h1>
        </div>

        {!hasSignedIn &&
          <div className="App-chooseHandle">
            <h2>Choose your handle:</h2>
            <HandleInputContainer />
          </div>
        }

        {hasSignedIn &&
          <div className="App-container">
            <div className="App-users">
              <UserWindowContainer />
            </div>

            <div className="App-chat">
              <ChatWindowContainer />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
