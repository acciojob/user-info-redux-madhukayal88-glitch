import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const { name, email } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })} 
      />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} 
      />
      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}
