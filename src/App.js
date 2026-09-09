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
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => dispatch(updateName(e.target.value))}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            placeholder="Enter Email"
          />
        </div>
      </form>
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default App;
