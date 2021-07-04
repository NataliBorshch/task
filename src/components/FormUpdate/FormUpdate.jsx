import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/task/operations';
import './FormUpdate.scss';
import Select from 'react-select';
import { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import Task from '../Task';

const options = [
  { value: 'todo', label: 'todo' },
  { value: 'ready', label: 'ready' },
  { value: 'in progress', label: 'in progress' },
  { value: 'complited', label: 'complited' },
];

class FormUpdate extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  // const status = ['todo', 'ready', 'in progress', 'complited'];
  // const dispatch = useDispatch();
  // const [task, setTask] = useState({});

  // useEffect(() => {
  //   setTask(item);
  // }, [item]);

  // const handleInput = useCallback(evt => {
  //   const value =
  //     evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
  //   const name = evt.target.name;
  //   setTask(prev => ({ ...prev, [name]: value }));
  // }, []);

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
    return (
      <form className="form_update" onSubmit={this.handleSubmit}>
        <label className="form_label">
          Name
          <input
            // value={task.name}
            name="name"
            // onChange={handleInput}
            className="form_input"
          />
        </label>
        <label className="form_label">
          Descriptions
          <input
            // value={task.description}
            name="description"
            // onChange={handleInput}
            className="form_input"
          />
        </label>
        <label className="form_label">
          Priority
          <input
            type="checkbox"
            // checked={task.priority}
            name="priority"
            onChange={this.handleInput}
            className="form_input"
          />
        </label>

        {/* <Checkbox
          value={this.state.task.priority}
          inputProps={{ 'aria-label': 'Checkbox A' }}
        /> */}

        <Select
          value={this.state.selectedOption}
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
        <button type="submit" onClick={this.handleSubmit} className="form_btn">
          Save
        </button>
      </form>
    );
  }
}

export default FormUpdate;
