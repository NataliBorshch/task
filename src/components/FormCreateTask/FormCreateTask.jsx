import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/task/operations';
import Icon from '../Icon';
import './Form.scss';
import moment from 'moment';

//done
class FormCreateTask extends Component {
  state = {
    name: '',
    description: '',
    date_created: moment().format('DD:MM:YYYY hh:mm:ss'),
    status: 'todo',
    priority: false,
  };

  handleInput = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    this.props.addTask({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', description: '' });
  };

  render() {
    const { name, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form_create_task">
        <label className="form_label">
          Name Task
          <input
            type="text"
            placeholder="name task"
            value={name}
            name="name"
            onChange={this.handleInput}
            required
            className="form_input"
          />
        </label>

        <label className="form_label">
          Description
          <input
            type="text"
            placeholder="description task"
            required
            name="description"
            value={description}
            onChange={this.handleInput}
            className="form_input"
          />
        </label>

        <button type="submit" className="form_create_btn">
          <Icon icon="plus" size={60} className="btn_icon" />
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTask: item => dispatch(operations.addTask(item)),
});

export default connect(null, mapDispatchToProps)(FormCreateTask);
