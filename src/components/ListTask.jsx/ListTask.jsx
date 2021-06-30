import { useSelector } from 'react-redux';
import selectors from '../../redux/task/selectors';
import './ListTask.scss';

import Task from '../Task/index';

export default function ListTask() {
  const task = useSelector(selectors.getVisibleTask);
  console.log(task);

  return (
    <div>
      <table className="table">
        <caption>The Beatles</caption>
        <thead className="label">
          <tr>
            <th className="title">Number</th>
            <th className="title">Name</th>
            <th className="title">Date</th>
            <th className="title">Description</th>
            <th className="title">Status</th>
            <th className="title">Priority</th>
            <th className="title">Change Task</th>
          </tr>
        </thead>
        <tbody>
          {task.length > 0 &&
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
