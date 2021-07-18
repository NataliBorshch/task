import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//routers selectors
import userSelectors from '../../../redux/users/select-use';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav id="nav">
      <ul>
        {isAuthenticated && (
          <li>
            <NavLink
              exact
              to="/home"
              className="nav_item"
              activeClassName="nav_active"
              id="task"
            >
              Home
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: userSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
