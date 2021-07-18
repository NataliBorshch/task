import { connect } from 'react-redux';
import { Component } from 'react';
// redux
import operations from '../../redux/task/operations';
// componets
import SimpleSelect from './Select';
// materia
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// styles
import './FormUpdate.scss';
// done

class FormUpdate extends Component {
  state = {
    name: '',
    priority: false,
    status: '',
    description: '',
  };

  componentDidMount() {
    const { name, priority, status, description } = this.props.task;
    this.setState({ name, priority, status, description });
  }

  handleChangeCategory = event => {
    this.setState({ status: event.target.value });
  };

  handleInput = evt => {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const name = evt.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateTask(this.props.task.id, { ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', priority: false, status: '', description: '' });
  };

  render() {
    const { name, description, status, priority } = this.state;
    return (
      <form className="form_update" onSubmit={this.handleSubmit}>
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
          onChange={this.handleInput}
        />
        <TextField
          required
          name="description"
          type="text"
          value={description}
          label="description"
          style={{
            width: '100%',
            marginBottom: '10px',
          }}
          onChange={this.handleInput}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={priority}
              onClick={this.handleInput}
              name="priority"
              color="primary"
              value={priority}
            />
          }
          label="Priority ?"
        />

        <SimpleSelect
          name="category"
          status={status}
          value={status}
          handleChange={this.handleChangeCategory}
        />
        <Button variant="contained" color="primary" type="submit">
          SAVE
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTask: (id, data) => dispatch(operations.updateTask(id, data)),
});

export default connect(null, mapDispatchToProps)(FormUpdate);

// export { FormUpdate };
