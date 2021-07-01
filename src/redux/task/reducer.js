import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const items = createReducer([], {
  [actions.getTaskSuccess]: (_, { payload }) => [...payload],
  [actions.createTaskSuccess]: (state, { payload }) => [...state, payload],
  [actions.removeTaskSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.updateTaskSuccess]: (state, { payload }) =>
    state.map(item =>(item.id === payload.id ? item : payload),
    ),
  [actions.rejectionTaskSuccess]: (state, { payload }) => [...state, payload],
});
//done
const filter = createReducer('', {
  [actions.filterTask]: (_, { payload }) => payload,
});
//done
const taskById = createReducer('', {
  [actions.getTaskByIdSuccess]: (_, { payload }) => payload,
});
//done
const isLoading = createReducer(false, {
  [actions.getTaskRequest]: () => true,
  [actions.getTaskSuccess]: () => false,
  [actions.getTaskError]: () => false,

  [actions.createTaskRequest]: () => true,
  [actions.createTaskSuccess]: () => false,
  [actions.createTaskError]: () => false,

  [actions.removeTaskRequest]: () => true,
  [actions.removeTaskSuccess]: () => false,
  [actions.removeTaskError]: () => false,

  [actions.updateTaskRequest]: () => true,
  [actions.updateTaskSuccess]: () => false,
  [actions.updateTaskError]: () => false,

  [actions.rejectionTaskRequest]: () => true,
  [actions.rejectionTaskSuccess]: () => false,
  [actions.rejectionTaskError]: () => false,
});

const taskReducer = combineReducers({
  items,
  filter,
  isLoading,
  taskById,
});

export default taskReducer;
