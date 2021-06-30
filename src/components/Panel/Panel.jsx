import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/task/selectors';
import actions from '../../redux/task/actions';
import './Panel.scss';
import { useCallback } from 'react';
import { useState } from 'react';
import FormCreateTask from '../FormCreateTask';

export default function Panel() {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  const getFilter = useCallback(
    event => dispatch(actions.filterTask(event.target.value)),
    [dispatch],
  );

  // const sortbyTime = () => {
  //   return task(({ date_created }) => {
  //     date_created.sort((a, b) => b - a);
  //   });
  // };

  // const openModal = useCallback(() => {
  //   return setShowModal(true);
  // }, []);
  // const onCloseModal = useCallback(() => {
  //   setShowModal(false);
  // }, []);
  return (
    <div className="panel_search">
      <FormCreateTask />
      <label>
        Filter by name
        <input type="text" value={filter} onChange={getFilter} />
      </label>
      <div>
        <button>Sort by time + </button>
        <button>Sort by time - </button>
        <button>Sort by priority + </button>
        <button>Sort by priority - </button>
        <button>Sort by status - </button>
      </div>
    </div>
  );
}
