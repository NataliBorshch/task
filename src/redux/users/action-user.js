import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('users/registerRequest');
const registerSuccess = createAction('users/registerSuccess');
const registerError = createAction('users/registerError');

const loginRequest = createAction('users/loginRequest');
const loginSuccess = createAction('users/loginSuccess');
const loginError = createAction('users/loginError');

const logoutRequest = createAction('users/logoutRequest');
const logoutSuccess = createAction('users/logoutSuccess');
const logoutError = createAction('users/logoutError');

const getCurrentUserRequest = createAction('users/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('users/getCurrentUserSuccess');
const getCurrentUserError = createAction('users/getCurrentUserError');

export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
