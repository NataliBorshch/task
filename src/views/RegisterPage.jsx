import React, { Component } from 'react';
import './RegisterPage.scss';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  render() {
    return (
      <div className="register_page">
        <h1 className="page_name">Registration </h1>
        <form className="register_form">
          <label className="form_label">
            Name
            <input className="form_input" required type="text" />
          </label>
          <label className="form_label">
            Email
            <input className="form_input" required type="email" />
          </label>
          <label className="form_label">
            Password
            <input className="form_input" required type="text" />
          </label>
          <button type="submit" className="form_btn">
            Sing IN
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
