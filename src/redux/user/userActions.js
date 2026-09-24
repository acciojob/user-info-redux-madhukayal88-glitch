import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest());
    try {
      const res = await fetch("https://randomuser.me/api/");
      if (!res.ok) throw new Error("Failed to fetch user");
      const data = await res.json();
      dispatch(fetchUserSuccess(data.results[0]));
    } catch (err) {
      dispatch(fetchUserFailure(err.message));
    }
  };
};
