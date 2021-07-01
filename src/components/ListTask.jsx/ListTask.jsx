import {  useSelector,} from 'react-redux';
import selectors from '../../redux/task/selectors';
import './ListTask.scss';
import { useState } from 'react';

import Task from '../Task/index';
import { useEffect } from 'react';

export default function ListTask() {
  const task = useSelector(selectors.getVisibleTask);
const [taskSort , setTaskSort] = useState(task); 

useEffect(() => {
  setTaskSort(task)
}, [task ]);


const sortByUp =(event)=>{
  const value = event.target.name;
  console.log(event.target.name)
 taskSort.sort((a , b )=> a[value] - b[value]); 
setTaskSort(taskSort)
}

const sortByDown =(event)=>{
  const value = event.target.name;
 taskSort.sort((a , b )=> b[value] - a[value]); 
  setTaskSort(taskSort)
  }

  console.log(taskSort)

  return (
    <div>
      <table className="table">
        <caption>The Beatles</caption>
        <thead className="label">
          <tr>
            <th className="title">
              Number <button type='button' name='id' onClick={sortByUp}> + </button>
              <button type='button' name='id' onClick={sortByDown}> - </button>
            </th>
            <th className="title">
              Name <button   type='button' name='name' onClick={sortByUp}>+</button>
              <button type='button' name='name' onClick={sortByDown}>-</button>
            </th>
            <th className="title">
              Date <button type='button'>sory by Date</button>
            </th>
            <th className="title">Description</th>
            <th className="title">
              Status <button>sory Status</button>
            </th>
            <th className="title">
              Priority <button>sory by priopitet</button>
            </th>
            <th className="title">Change Task</th>
          </tr>
        </thead>
        <tbody>
          {taskSort.length > 0 &&
            task.map(item => (
              <tr key={item.id}>
                <Task item={item} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
