const getAuthenticated = state => state.auth.isAuthorized;

const getUserName = state => state.auth.user.name;
export default {
  getAuthenticated,
  getUserName,
};
