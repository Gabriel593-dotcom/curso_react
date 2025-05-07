import React, { useState } from "react";
import "./PreviousState.css";

const PreviousState = () => {
  const DEFAULT_USER_LIST = [
    { id: 2, name: "Gabriel", age: 25 },
    { id: 1, name: "Matheus", age: 26 },
    { id: 3, name: "José", age: 27 },
  ];
  const [users, setUsers] = useState(DEFAULT_USER_LIST);
  const usersLength = DEFAULT_USER_LIST.length;

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * usersLength);
    console.log(`${randomNumber} | ${usersLength})`);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <h1>USERS</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} | {user.age} years
          </li>
        ))}
      </ul>
      <button className="button-delete" onClick={deleteRandom}>
        Delete a random user.
      </button>
    </div>
  );
};

export default PreviousState;
