import React from 'react';

import './UserWindow.css';

const UserWindow = ({ users }) => (
  <div className="UserWindow">
    <h2>Users</h2>
    <hr />
    <ul className="UserWindow-list">
      {users.map(({ handle }) =>
        <li className="UserWindow-user" key={handle}>{handle}</li>)
      }
    </ul>
  </div>
);

export default UserWindow;
