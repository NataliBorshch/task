import { Component } from 'react';
import { connect } from 'react-redux';
// materia
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
// redux
import userSelector from '../../redux/users/select-use';
import taskSelector from '../../redux/task/selectors';
// styles
import './Profile.scss';
//done

class Profile extends Component {
  render() {
    const { user, taskCount } = this.props;
    return (
      <div className="profile">
        <h2 className="profile_name">Profile</h2>
        <div>
          <div>
            <img
              src="https://ik.imagekit.io/s2fpg15d4rx/default-avatar_8DzX4xISu.png"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div>
            <ul className="profile_list">
              <li className="profile_item">
                <PersonIcon fontSize="large" />
                <p className="user_info">{user.name}</p>
              </li>
              <li className="profile_item">
                <LockIcon fontSize="large" />
                <p className="user_info">***********</p>
              </li>
              <li className="profile_item">
                <EmailIcon fontSize="large" />{' '}
                <p className="user_info">{user.email}</p>
              </li>
              <li className="profile_item">
                <BusinessCenterIcon fontSize="large" />
                <p className="user_info">{taskCount}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector.getUser(state),
  taskCount: taskSelector.getTasksCount(state),
});

export default connect(mapStateToProps, null)(Profile);

export { Profile };
