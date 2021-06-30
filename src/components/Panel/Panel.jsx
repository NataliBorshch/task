import { useDispatch, useSelector } from "react-redux";
import selectors from '../../redux/task/selectors';
import './Panel.scss';

export default function Panel(){
    const task = useSelector(selectors.getTasks);
    const filter =  useSelector(selectors.getFilter)
    const dispatch = useDispatch();
    
    const hangleInput=(event)=>{
         
    }


    const sortbyTime = ()=>{
        return task(({date_created})=>{
            date_created.sort((a, b) => (b - a))
        })
    }
    return <div className='panel_search' >

        <label onChange=''><input type='text' value ={filter}/></label>
        <button>Sort by time + </button>
        <button>Sort by time - </button>
        <button>Sort by priority + </button>
        <button>Sort by priority - </button>
        <button>Sort by status - </button>
    </div>
}