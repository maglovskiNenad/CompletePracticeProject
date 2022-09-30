import React from "react";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul className={classes.user}>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} You are {user.age} years old.
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
