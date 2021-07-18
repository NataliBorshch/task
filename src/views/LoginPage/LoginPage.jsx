import React, { Component } from 'react';
import { connect } from 'react-redux';
// redux
import usersOperations from '../../redux/users/operations-user';
// materia
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// styles
import '../RegisterPage/RegisterPage.scss';
// done
class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ ...this.state });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="register_page">
        <h1 className="page_name">
          Log In <BusinessCenterIcon fontSize="large" />
        </h1>

        <form className="register_form" onSubmit={e => this.handleSubmit(e)}>
          <TextField
            required
            name="email"
            type="email"
            label="email"
            value={email}
            style={{
              width: '100%',
              marginBottom: '10px',
            }}
            onChange={this.handleChange}
          />
          <TextField
            required
            name="password"
            type="password"
            value={password}
            label="password"
            style={{
              width: '100%',
              marginBottom: '10px',
            }}
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              color: 'white',
            }}
            type="submit"
          >
            log in
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(usersOperations.logIn(data)),
});

export default connect(null, mapDispatchToProps)(LoginPage);

// export { LoginPage };
