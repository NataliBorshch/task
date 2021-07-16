import { connect } from 'react-redux';
import './UserMenu.scss';
import userSelectors from '../../../redux/users/select-use';
import userOperation from '../../../redux/users/operations-user';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div id="usermenu">
      <img
        alt="avatar"
        width="40px"
        height="auto"
        src="https://ik.imagekit.io/s2fpg15d4rx/kisspng-computer-icons-portable-network-graphics-user-icon-my-b-tab-svg-png-icon-free-download-8-584-onl-5bfa37607f3959.2067798415431248325211_-Xj5AVLFlyoz.png"
      />
      <p className="name" id="name_user">
        Wellcome {name ? name : 'Guest'}
      </p>
      <button onClick={onLogout}>
        Log off
        <img
          alt="logout"
          src="https://ik.imagekit.io/s2fpg15d4rx/imgbin_web-hosting-icon-logout-icon-arrow-icon-png_8SQmsSuCZ.png"
          width="50px"
        />
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
