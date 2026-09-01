import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updateEmail } from '../actions/userActions';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.user);

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
      </form>
      <div className="output">
        <p>Name - {name || 'Not set'}</p>
        <p>Email - {email || 'Not set'}</p>
      </div>
    </div>
  );
};

export default UserInfo;
