import React, { Component } from 'react';
import { connect } from 'react-redux';
// redux
import userOperations from '../../redux/users/operations-user';
// materia
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// styles
import './RegisterPage.scss';
// done

class RegisterPage extends Component {
  state = {
    name: '',
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
    const { name, password, email } = this.state;
    return (
      <div className="register_page">
        <h1 className="page_name">
          Registration <BusinessCenterIcon fontSize="large" />
        </h1>

        <form className="register_form" onSubmit={this.handleSubmit}>
          <TextField
            required
            name="name"
            type="text"
            value={name}
            label="name"
            style={{
              width: '100%',
              marginBottom: '10px',
            }}
            onChange={this.handleChange}
          />
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
            label="password"
            value={password}
            style={{
              width: '100%',
              marginBottom: '10px',
            }}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              color: 'white',
            }}
            disableElevation
          >
            Sing IN
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(userOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);

export { RegisterPage };
