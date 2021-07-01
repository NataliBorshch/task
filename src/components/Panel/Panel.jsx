import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useState } from 'react';
import selectors from '../../redux/task/selectors';
import actions from '../../redux/task/actions';
import './Panel.scss';
import FormCreateTask from '../FormCreateTask';

export default function Panel() {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const getFilter = useCallback(
    event => dispatch(actions.filterTask(event.target.value)),
    [dispatch],
  );

  const sortbyUp = array => {
    return array.sort((a, b) => a - b);
  };

  const sortbyDown = array => {
    return array.sort((a, b) => b - a);
  };

  return (
    <div className="panel_search">
      <FormCreateTask />
      <div className="panel_filter">
        <label cl>
          Filter by name
          <input type="text" value={filter} onChange={getFilter} />
        </label>
      </div>
    </div>
  );
}
