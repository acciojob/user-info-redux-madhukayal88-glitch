import { createStore } from 'redux';

const initialState = { name: '', email: '' };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NAME': return { ...state, name: action.payload };
    case 'SET_EMAIL': return { ...state, email: action.payload };
    default: return state;
  }
}

export const store = createStore(userReducer);
