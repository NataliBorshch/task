import "./Form.scss";
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/task/operations'


export default function FormCreateTask() {

  const initialState = {
    name: '',
    date_created: new Date(),
    description: '',
    status:["todo", 'ready',  'in progress','complited' ],
    priority: false,
  };

  const [task, setTask] = useState(initialState);
  const dispatch = useDispatch();

  const addTask = useCallback(
    (data) => {
      console.log(data)
      dispatch(operations.addTask(data))
    },
    [dispatch],
  );
  
  const handleInput = useCallback(evt => {
    const value = evt.target.name;
    setTask(prev => ({ ...prev, [value]: evt.target.value }));
  }, []);

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      addTask(task);
      setTask(initialState);
    },
    [task , addTask , initialState],
  );
 

 
  return (
    <div className='form_box'>
      <form onSubmit = {handleSubmit}>
      <label>
        Name Task
        <input type="text" placeholder="name task" value={task.name} name='name' onChange={handleInput} required />
      </label>

      <label>
        Description
        <input type="text" placeholder="description task" required name='description' value={task.description} onChange={handleInput}/>
      </label>
      <button type="submit" className='form_btn' >Add new Task</button>
    </form>
    </div>
  );
}