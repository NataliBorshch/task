import React from 'react';
import { NavLink } from 'react-router-dom';
// routers
import routers from '../../routers/routers';
import { v4 as uuidv4 } from 'uuid';
// styles
import './AppBar.scss';

const AuthNav = () => {
  return (
    <ul id="auth_nav">
      <li key={uuidv4()}>
        <NavLink
          id="login"
          to={routers.login}
          className="nav_item"
          activeClassName="nav_active"
        >
          Log in
        </NavLink>
      </li>
      <li key={uuidv4()}>
        <NavLink
          id="singin"
          to={routers.register}
          className="nav_item"
          activeClassName="nav_active"
        >
          Sing up
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
