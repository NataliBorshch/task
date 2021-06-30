import { useSelector } from "react-redux";
import selectors from '../../redux/task/selectors';
import Panel from "../Panel";
import './ListTask.scss';




import Task from '../Task/index'

export default function ListTask (){
  const task = useSelector(selectors.getTasks);
  console.log(task)

    return <div>

        <Panel/>
        <ol className='list_task'>{task && task.map(item=>{
        return <li key={item.id} className='list_item'>
            <Task item={item}/>
        </li>
    })}  </ol>
    </div>


  
}