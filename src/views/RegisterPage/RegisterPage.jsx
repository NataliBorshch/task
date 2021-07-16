import React, { Component } from 'react';
import './RegisterPage.scss';
import { connect } from 'react-redux';
import userOperations from '../../redux/users/operations-user';

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
    return (
      <div className="register_page">
        <h1 className="page_name">Registration </h1>
        <form className="register_form" onSubmit={this.handleSubmit}>
          <label className="form_label">
            Name
            <input
              className="form_input"
              required
              name="name"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label className="form_label">
            Email
            <input
              className="form_input"
              required
              type="email"
              onChange={this.handleChange}
            />
          </label>
          <label className="form_label">
            Password
            <input
              className="form_input"
              required
              name="password"
              type="text"
              onChange={this.handleChange}
            />
          </label>
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

export { RegisterPage };
