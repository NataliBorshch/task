import './AppBar.scss';
import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import Timer from '../../components/Timer';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header>
      <Navigation />
      <Timer />
      <AuthNav />
    </header>
  );
};

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getAuthenticated(state),
// });

export default AppBar;
