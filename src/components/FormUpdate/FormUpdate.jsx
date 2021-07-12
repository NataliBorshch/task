import { v4 as uuidv4 } from 'uuid';
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
    task: {},
  };

  handleChange = selectedOption => {
    console.log(selectedOption.value);
    this.setState(prev => ({
      task: { ...prev, status: selectedOption.value },
    }));
  };

  handleInput = evt => {
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const name = evt.target.name;
    this.setState(prev => ({ task: { ...prev, [name]: value } }));
  };

  componentDidMount() {
    this.setState({ task: { ...this.props.task } });
  }

  // const updateTask = useCallback(
  //   data => {
  //     dispatch(operations.updateTask(item.id, data));
  //   },
  //   [dispatch, item.id],
  // );

  // const handleSubmit = useCallback(
  //   evt => {
  //     evt.preventDefault();
  //     updateTask({ ...task, date_created: new Date() });
  //   },
  //   [task, updateTask],
  // );
  render() {
    const { task } = this.state;
    console.log(task);

    return (
      <form className="form_update">
        <label className="form_label">
          Name
          <input
            value={task.name}
            name="name"
            onChange={this.handleInput}
            className="form_input"
          />
        </label>
        <label className="form_label">
          Descriptions
          <input
            value={task.description}
            name="description"
            onChange={this.handleInput}
            className="form_input"
          />
        </label>
        <Checkbox
          value={this.state.task.priority}
          name="priority"
          inputProps={{ 'aria-label': 'Checkbox A' }}
          onClick={this.handleInput}
          checked={this.state.task.priority}
        />

        <Select
          value={this.state.task.status}
          onChange={this.handleChange}
          options={options}
          name={options}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'hotpink',
              primary: 'dangerLight',
            },
          })}
        />
        <button type="submit" className="form_btn">
          Save
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  // tasks: selectors.getVisibleTask(state),
});

const mapDispatchToProps = dispatch => ({
  // sortByUp: value => dispatch(actions.SortTaskUp(value)),
  // sortByDown: value => dispatch(actions.SortTaskDown(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUpdate);
