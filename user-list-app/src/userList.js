// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userList.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
