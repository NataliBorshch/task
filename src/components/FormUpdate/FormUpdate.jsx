import operations from '../../redux/task/operations';
import './FormUpdate.scss';
import Select from 'react-select';
import { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import { connect } from 'react-redux';

const status = ['todo', 'ready', 'in progress', 'complited'];

const options = [
  { value: 'todo', label: 'todo' },
  { value: 'ready', label: 'ready' },
  { value: 'in progress', label: 'in progress' },
  { value: 'complited', label: 'complited' },
];

class FormUpdate extends Component {
  state = {
    name: '',
    priority: false,
    status: '',
    description: '',
  };

  componentDidMount() {
    this.setState({ ...this.props.task });
  }

  handleChangeSelect = event => {
    this.setState({ status: event.value });
  };

  handleInput = evt => {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const name = evt.target.name;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateTask(this.state.id, { ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', priority: false, status: '', description: '' });
  };

  render() {
    const { name, description, status, priority } = this.state;
    return (
      <form className="form_update" onSubmit={this.handleSubmit}>
        <label className="form_label">
          Name
          <input
            value={name}
            name="name"
            onChange={this.handleInput}
            className="form_input"
          />
        </label>
        <label className="form_label">
          Descriptions
          <input
            value={description}
            name="description"
            onChange={this.handleInput}
            className="form_input"
          />
        </label>
        <Checkbox
          value={priority}
          name="priority"
          inputProps={{ 'aria-label': 'Checkbox A' }}
          onClick={this.handleInput}
          checked={priority}
          id="checkbox"
        />

        <Select
          value={status}
          onChange={this.handleChangeSelect}
          options={options}
          defaultValue={status}
          name={options}
          width="250px"
          className="css-e56m7-control"
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            width: '250px',
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'dangerLight',
            },
          })}
        />
        <button type="button" className="form_btn">
          Save
        </button>
        <button className="form_btn" type="button" onClick={this.props.onClose}>
          Close
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTask: (id, data) => dispatch(operations.updateTask(id, data)),
});

export default connect(null, mapDispatchToProps)(FormUpdate);

export { FormUpdate };
