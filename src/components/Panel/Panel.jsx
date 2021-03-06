import { Component } from 'react';
import { NavLink } from 'react-router-dom';
// materia
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PersonIcon from '@material-ui/icons/Person';
// styles
import './Panel.scss';

// done
class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <ul className="panel_list">
          <li className="panel_item">
            <NavLink
              exact
              to="/home/tasks"
              className="panel_link"
              activeClassName="panel_link_active"
            >
              <BusinessCenterIcon
                fontSize="large"
                style={{ margin: ' 0px 10px' }}
              />
              Task
            </NavLink>
          </li>
          <li className="panel_item">
            <NavLink
              exact
              to="/home/profile"
              className="panel_link"
              activeClassName="panel_link_active"
            >
              <PersonIcon fontSize="large" style={{ margin: ' 0px 10px' }} />
              Profile
            </NavLink>
          </li>
          <li className="panel_item">
            <NavLink
              exact
              to="/home/stats"
              className="panel_link"
              activeClassName="panel_link_active"
            >
              <EqualizerIcon fontSize="large" style={{ margin: ' 0px 10px' }} />
              Stats
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Panel;
