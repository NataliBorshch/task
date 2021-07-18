import axios from 'axios';
import userActions from './action-user';

axios.defaults.baseURL = 'http://localhost:5050/api';

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
    .post('/user/register', accountingData)
    .then(({ data }) => {
      token.set(data.data.token);
      return dispatch(userActions.registerSuccess(data));
    })
    .catch(error => dispatch(userActions.registerError(error.message)));
};

const logIn = accountingData => dispatch => {
  dispatch(userActions.loginRequest());
  axios
    .post('/user/login', accountingData)
    .then(({ data }) => {
      token.set(data.data.token);
      return dispatch(userActions.loginSuccess(data));
    })
    .catch(error => dispatch(userActions.logoutError(error.message)));
};
const logOut = () => dispatch => {
  dispatch(userActions.logoutRequest());
  axios
    .post('/user/logout')
    .then(() => {
      token.unset();
      return dispatch(userActions.logoutSuccess());
    })
    .catch(error => dispatch(userActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    users: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(userActions.getCurrentUserRequest());

  axios
    .get('/user/current')
    .then(({ data }) => dispatch(userActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(userActions.getCurrentUserError(error.message)));
};

const uploadAvatar = file => async dispatch => {
  dispatch(userActions.uploadAvatarRequest());
  try {
    const fd = new FormData();
    fd.append('name', file.name);
    fd.append('avatar', file);
    const res = await axios.patch('/users/avatars', fd);
    dispatch(userActions.uploadAvatarSuccess(res.data));
  } catch (err) {
    dispatch(userActions.uploadAvatarError(err.message));
  }
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
  uploadAvatar,
};
