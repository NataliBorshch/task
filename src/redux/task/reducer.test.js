import { render, screen } from '@testing-library/react';
import actions from './actions';
import reducer from './reducer';

describe('Actions add tasks', () => {
  const state = {
    tasks: [
      {
        name: 'tasks1',
        description: 'do this test',
        date_created: '10:03:2035 10:10:10',
        status: 'todo',
        priority: false,
      },
    ],
  };
  it('actions add tasks success', () => {
    const newTask = actions.createTaskSuccess({
      name: 'tasks2',
      description: ' again do this test',
      date_created: '10:03:2035 10:10:10',
      status: 'todo',
      priority: false,
    });
    const newState = reducer.createTaskSuccess(state, newTask);
    expect(newState.tasks.length).toBe(2);
  });
});
