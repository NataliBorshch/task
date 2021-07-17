const getAuthenticated = state => state.users.isAuthorized;

const getUserName = state => state.users.user.name;
const getUser = state => state.users.user;
export default {
  getAuthenticated,
  getUserName,
  getUser,
};
