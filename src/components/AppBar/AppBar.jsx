import './AppBar.scss';
import React from 'react';
import Navigation from '../AppBar/Navigation/Navigation';
import AuthNav from './AuthNav';
import UserMenu from '../AppBar/UserMenu/UserMenu';
import selectors from '../../redux/users/select-use';
import { connect } from 'react-redux';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <Navigation />

      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: selectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
