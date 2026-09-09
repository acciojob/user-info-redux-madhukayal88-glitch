import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from './redux/userSlice';

function App() {
  const { name, email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
          placeholder="Enter Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
          placeholder="Enter Email"
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
