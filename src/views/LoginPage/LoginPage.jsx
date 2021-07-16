import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../RegisterPage/RegisterPage.scss';
import usersOperations from '../../redux/users/operations-user';

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
    return (
      <div className="register_page">
        <h1 className="page_name">Log In </h1>
        <form className="register_form" onSubmit={this.handleSubmit}>
          <label className="form_label">
            Email
            <input
              value={this.state.email}
              className="form_input"
              required
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <label className="form_label">
            Password
            <input
              className="form_input"
              value={this.state.password}
              required
              name="password"
              type="text"
              id="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="form_btn">
            log in
          </button>
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
