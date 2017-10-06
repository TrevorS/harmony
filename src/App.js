import React from 'react';
import './App.css';

import UserWindow from './components/UserWindow';
import ChatWindow from './components/ChatWindow';

const users = [
  { handle: 'Trevor' },
  { handle: 'Faith-Anne' },
];

const messages = [
  { handle: 'Trevor', text: 'Hello!' },
  { handle: 'Faith-Anne', text: 'Hi!' },
];

const App = () => (
  <div className="App">
    <div className="App-header">
      <h1>Harmony Chat</h1>
    </div>
    <div className="App-container">
      <div className="App-users">
        <UserWindow users={users} />
      </div>

      <div className="App-chat">
        <ChatWindow messages={messages} />
      </div>
    </div>
  </div>
);

export default App;
