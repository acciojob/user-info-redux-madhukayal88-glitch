import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from './redux/userSlice';

function App() {
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
      <div className="output">
        <div>Name - {name}</div>
        <div>Email - {email}</div>
      </div>
    </div>
  );
}

export default App;
