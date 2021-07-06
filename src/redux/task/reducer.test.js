import { render, screen } from '@testing-library/react';
import actions from './actions';
import reducer from './reducer';

const state = [
  {
    name: 'nataliia',
    description: 'fghfghf',
    date_created: '05:07:2021 09:30:55',
    status: 'todo',
    priority: false,
    id: 10,
  },
];

const newTask = {
  name: 'nataliia',
  description: 'do this test',
  date_created: '05:07:2021 09:30:55',
  status: 'todo',
  priority: true,
  id: 11,
};

describe('Reducer task get All tasks', () => {
  const initialState = {
    items: [],
    filter: '',
    isLoading: false,
  };
  it('task get all request', () => {
    const actionType = actions.getTaskRequest;
    expect(reducer(initialState, actionType)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('task get all success ', () => {
    const action = {
      type: actions.getTaskSuccess,
      payload: [...state],
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      items: [...action.payload],
    });
  });
  it('task getAll error', () => {
    const action = actions.getTaskError;
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});

describe('Reducer task Add task', () => {
  const initialState = {
    items: state,
    filter: '',
    isLoading: false,
  };
  it('task  add task request', () => {
    const action = actions.createTaskRequest;
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('task add  task success ', () => {
    const action = {
      type: actions.createTaskSuccess,
      payload: newTask,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      items: [...initialState.items, action.payload],
    });
  });
  it('task add  task ERROR ', () => {
    const action = actions.createTaskError;

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
    });
  });
});
