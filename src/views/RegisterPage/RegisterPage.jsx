import React, { Component } from 'react';
import './RegisterPage.scss';
import { connect } from 'react-redux';
import userOperations from '../../redux/users/operations-user';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    console.log(this.state);
    this.props.onSubmit({ ...this.state });
  };
  render() {
    return (
      <div className="register_page">
        <h1 className="page_name">Registration </h1>
        <form className="register_form" onSubmit={this.handleSubmit}>
          <TextField
            required
            name="name"
            type="text"
            label="name"
            style={{
              width: '100%',
            }}
            onChange={this.handleChange}
          />
          <TextField
            required
            name="email"
            type="email"
            label="email"
            style={{
              width: '100%',
            }}
            onChange={this.handleChange}
          />
          <TextField
            required
            name="password"
            type="password"
            label="password"
            style={{
              width: '100%',
            }}
            onChange={this.handleChange}
          />
          {/* <Button>Sign In </Button> */}
          <button type="submit" className="form_btn">
            Sing IN
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(userOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);

// export { RegisterPage };
