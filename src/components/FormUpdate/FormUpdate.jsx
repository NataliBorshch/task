import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/task/operations';
import selectors from '../../redux/task/selectors';
import './FormUpdate.scss';

export default function FormUpdate({ id }) {
  const status = ['todo', 'ready', 'in progress', 'complited'];
  const dispatch = useDispatch();
  const taskId = useSelector(selectors.getById);
  const [task, setTask] = useState(taskId);

  useEffect(() => {
    dispatch(operations.getById(id));
  }, [dispatch, id , taskId]);

  const handleInput = useCallback(evt => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    const name  = evt.target.name;
    setTask(prev => ({ ...prev, [name]: value,}));
  }, []);

  const updateTask = useCallback(
    data => {
      dispatch(operations.updateTask(id, data));
    },
    [dispatch, id],
  );

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      updateTask({...task , "date_created":new Date()});
    },
    [task, updateTask],
  );

  return (
    task && (
      <form className="form_update" onSubmit={handleSubmit}>
        <label>
          Name
          <input value={task.name} name="name" onChange={handleInput} />
        </label>
        <label>
          Descriptions
          <input
            value={task.description}
            name="description"
            onChange={handleInput}
          /></label>
        <label>
          Priority
          <input type="checkbox" checked={task.priority} name="priority" onChange={handleInput} />
        </label>

        <label>
          Status
          <select className="task_status" value={task.status} name='status' onChange={handleInput}>
            {status.map(item => {
              return <option key={uuidv4()} value={item} name='status' >{item}</option>;
            })}
          </select>
        </label>
        <button type='submit' onClick={handleSubmit}>Save</button>
      </form>
    )
  );
}
