import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
import operations from '../../redux/task/operations';
import selectors from '../../redux/task/selectors';
//styles
import './Form.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormCreateTask extends Component {
  state = {
    name: '',
    description: '',
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

    return this.props.isLoading ? (
      <p>Loading...</p>
    ) : (
      <form onSubmit={this.handleSubmit} className="form_create_task">
        <TextField
          required
          name="name"
          color="primary"
          value={name}
          type="text"
          label="Name Task"
          style={{
            width: '100%',
            marginBottom: '10px',
          }}
          onChange={this.handleInput}
        />
        <TextField
          required
          name="description"
          value={description}
          type="text"
          label="Description"
          style={{
            width: '100%',
            marginBottom: '10px',
          }}
          onChange={this.handleInput}
        />

        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={{
            color: 'white',
          }}
          disableElevation
        >
          add Task
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: selectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  addTask: item => dispatch(operations.addTask(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateTask);

export { FormCreateTask };
