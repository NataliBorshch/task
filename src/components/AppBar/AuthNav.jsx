import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import routers from '../../routers/routers';

const AuthNav = () => {
  return (
    <ul>
      <li key={uuidv4()}>
        <NavLink
          to={routers.login}
          className="nav_item"
          activeClassName="nav_activ"
        >
          Log in
        </NavLink>
      </li>
      <li key={uuidv4()}>
        <NavLink
          to={routers.register}
          className="nav_item"
          activeClassName="nav_activ"
        >
          Sing up
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
