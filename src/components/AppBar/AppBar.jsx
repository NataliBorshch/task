import './AppBar.scss';
import React from 'react';
import Navigation from '../AppBar/Navigation/Navigation';
import AuthNav from './AuthNav';
import Timer from '../../components/Timer';
import UserMenu from '../AppBar/UserMenu/UserMenu';
import selectors from '../../redux/users/select-use';
const AppBar = ({ isAuthenticated = true }) => {
  return (
    <header>
      <Navigation />
      <Timer />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: selectors.getAuthenticated(state),
// });

export default AppBar;
