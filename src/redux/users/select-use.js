const getAuthenticated = state => state.users.isAuthorized;

const getUserName = state => state.users.user.name;
export default {
  getAuthenticated,
  getUserName,
};
