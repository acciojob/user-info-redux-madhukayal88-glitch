import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "./actions/userActions";

function App() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);

  return (
    <div className="App">
      <h1>User Information</h1>

      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
          placeholder="Enter your email"
        />
      </div>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default App;