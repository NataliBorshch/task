import { createReducer, combineReducers } from '@reduxjs/toolkit';
import action from './action-user';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [action.registerSuccess]: (_, { payload }) => payload.user,
  [action.loginSuccess]: (_, { payload }) => payload.user,
  [action.logoutSuccess]: () => initialUserState,
  [action.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [action.registerSuccess]: (_, { payload }) => payload.token,
  [action.loginSuccess]: (_, { payload }) => payload.token,
  [action.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [action.registerError]: (_, { payload }) => payload,
  [action.loginError]: (_, { payload }) => payload,
  [action.logoutError]: (_, { payload }) => payload,
  [action.getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthorized = createReducer(false, {
  [action.registerSuccess]: () => true,
  [action.loginSuccess]: () => true,
  [action.getCurrentUserSuccess]: () => true,
  [action.logoutSuccess]: () => false,
  [action.registerError]: () => false,
  [action.loginError]: () => false,
  [action.getCurrentUserError]: () => false,
});
export default combineReducers({
  user,
  token,
  error,
  isAuthorized,
});
