import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateEmail } from './redux/userSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user);

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div className="App">
      <h1>User Information</h1>
      
      <div className="form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="output">
        <p>Name - {name || 'No name entered'}</p>
        <p>Email - {email || 'No email entered'}</p>
      </div>
    </div>
  );
}

export default App;
