import axios from 'axios';
import userActions from './action-user';

axios.defaults.baseURL = 'http://localhost:5050';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = accountingData => dispatch => {
  dispatch(userActions.registerRequest());
  axios
    .post('/users/signup', accountingData)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(userActions.registerSuccess(data));
    })
    .catch(error => dispatch(userActions.registerError(error.message)));
};

const logIn = accountingData => dispatch => {
  dispatch(userActions.loginRequest());
  axios
    .post('/users/login', accountingData)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(userActions.loginSuccess(data));
    })
    .catch(error => dispatch(userActions.logoutError(error.message)));
};
const logOut = () => dispatch => {
  dispatch(userActions.logoutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      return dispatch(userActions.logoutSuccess());
    })
    .catch(error => dispatch(userActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userActions.getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(userActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(userActions.getCurrentUserError(error.message)));
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
