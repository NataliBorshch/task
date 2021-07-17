import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//routers selectors
import routers from '../../../routers/routers';
import userSelectors from '../../../redux/users/select-use';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav id="nav">
      <ul>
        {/* <li>
          <NavLink
            exact
            to={routers.main}
            className="nav_item"
            activeClassName="nav_activ"
            id="main"
          >
            Main
          </NavLink>
        </li> */}

        {isAuthenticated && (
          <li>
            <NavLink
              exact
              to={routers.tasks}
              className="nav_item"
              activeClassName="nav_activ"
              id="task"
            >
              Task
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
