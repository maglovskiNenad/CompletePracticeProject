import "./App.css";
import React, { useState } from "react";
import AddUsersForm from "./components/Users/AddUserForm";
import UsersList from "./components/Users/UsersList";

function App() {
  const [user, setUser] = useState([]);

  const creatUserHandler = (userName, userAge) => {
    setUser((prevUser) => {
      return [
        ...prevUser,
        {
          name: userName,
          age: userAge,
          id: Math.floor(Math.random() * 100),
        },
      ];
    });
  };

  return (
    <div className="App">
      <AddUsersForm onCreateUserHandler={creatUserHandler} />
      <UsersList users={user} />
    </div>
  );
}

export default App;
