import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/task/selectors';
import operations from '../../redux/task/operations';
import './ListTask.scss';
import { useState, useEffect } from 'react';
import Task from '../Task/index';

export default function ListTask() {
  const tasks = useSelector(selectors.getVisibleTask);
  const [taskSort, setTaskSort] = useState([]);

  useEffect(() => {
    setTaskSort(tasks);
  }, [tasks]);

  const sortByUp = value => {
    const taskSort = [...tasks].sort((a, b) => a[value] - b[value]);
    setTaskSort(taskSort);
  };

  const sortByDown = value => {
    const taskSort = [...tasks].sort((a, b) => b[value] - a[value]);

    setTaskSort(taskSort);
  };

  console.log(taskSort);

  return (
    <div>
      <table className="table">
        <caption>The Beatles</caption>
        <thead className="label">
          <tr>
            <th className="title">
              Number{' '}
              <button type="button" onClick={() => sortByUp('id')}>
                {' '}
                +{' '}
              </button>
              <button type="button" onClick={() => sortByDown('id')}>
                -
              </button>
            </th>
            <th className="title">
              Name{' '}
              <button type="button" onClick={() => sortByUp('name')}>
                +
              </button>
              <button type="button" onClick={() => sortByDown('name')}>
                -
              </button>
            </th>
            <th className="title">
              Date{' '}
              <button type="button" onClick={() => sortByUp('date_created')}>
                +
              </button>
              <button type="button" onClick={() => sortByDown('date_created')}>
                -
              </button>
            </th>
            <th className="title">
              Description
              <button type="button" onClick={() => sortByUp('description')}>
                +
              </button>
              <button type="button" onClick={() => sortByDown('description')}>
                -
              </button>
            </th>
            <th className="title">
              Status{' '}
              <button type="button" onClick={() => sortByUp('status')}>
                +
              </button>
              <button type="button" onClick={() => sortByUp('status')}>
                -
              </button>
            </th>
            <th className="title">
              Priority <button>sort by priopitet</button>
            </th>
            <th className="title">Change Task</th>
          </tr>
        </thead>
        <tbody>
          {taskSort.length > 0 &&
            taskSort.map(item => (
              <tr key={item.id}>
                <Task item={item} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
