import { connect } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import userSelectors from '../../../redux/users/select-use';
import userOperation from '../../../redux/users/operations-user';
import './UserMenu.scss';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div id="user_menu">
      <div>
        <img
          alt="avatar"
          width="40px"
          height="auto"
          src="https://ik.imagekit.io/s2fpg15d4rx/kisspng-computer-icons-portable-network-graphics-user-icon-my-b-tab-svg-png-icon-free-download-8-584-onl-5bfa37607f3959.2067798415431248325211_-Xj5AVLFlyoz.png"
        />
      </div>

      <p className="name" id="name_user">
        Wellcome {name ? name : 'Guest'}
      </p>
      <button onClick={onLogout} className="btn_logout">
        <ExitToAppIcon fontSize="large" />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: userSelectors.getUserName(state),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(userOperation.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

export { UserMenu };
