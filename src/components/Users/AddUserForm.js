import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUserForm.module.css";
import ErrorOverlay from "./ErrorOverlay";

const AddUsersForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onCreateUser = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        text: "Invalid Input!!!!!",
        message: "Enter valid Username and Age in input!",
      });
      return;
    }

    if (enteredAge <= 1) {
      setError({
        text: "Invalid Input!!!!!",
        message: "Enter valid Age in input!",
      });
      return;
    }
    props.onCreateUserHandler(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const userChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorOverlay
          title={error.text}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form className={classes.form} onSubmit={onCreateUser}>
          <div className={classes.inputDiv}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username..."
              value={enteredUsername}
              onChange={userChangeHandler}
            />
          </div>
          <div className={classes.inputDiv}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age..."
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsersForm;
