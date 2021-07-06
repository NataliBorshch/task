import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routers from '../../../routers/routers';

const Navigation = ({ isAuthenticated = true }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to={routers.main}
            className="nav_item"
            activeClassName="nav_activ"
          >
            Main
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink
              exact
              to={routers.tasks}
              className="nav_item"
              activeClassName="nav_activ"
            >
              Task
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
