import { v4 as uuidv4 } from 'uuid';
import './Task.scss';

export default function Task({item}){

    return <div className='task'>
        <p className='task_time'>{item.date_created}</p>
        <p className='task_name'>{item.name}</p>
        <p className='task_desk'>{item.description}</p>
        <label className='task_priority'>
            <input  type="checkbox" />
        </label>
        <select className='task_status'>Status
            {item.status.map((item)=>{
               return <option key={uuidv4()}>{item}</option>
            })} 
              </select>
              <button  className='task_btn'>Delete</button>
              <button className='task_btn' >Edit</button>
              <button  className='task_btn'>rejection </button>
    </div>

}