import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Information</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default App;
