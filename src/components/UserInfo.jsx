import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/user/userActions';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!user) return null;

  return (
    <div>
      <h1>User Info</h1>
      <img src={user.picture.large} alt="user" />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
    </div>
  );
};

export default UserInfo;
