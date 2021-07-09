import * as React from 'react';
import { mount, shallow } from 'enzyme';
import ListTask from '../ListTask';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('ListTask Components Utin Test  ', () => {
  const mockStore = configureStore();
  const initialState = {
    tasks: [
      {
        name: 'Natali Borshch',
        description: 'fhfh',
        date_created: '2021-07-03T16:14:12.468Z',
        status: 'todo',
        priority: false,
        id: 7,
      },
      {
        name: 'nataliia',
        description: 'fghfghf',
        date_created: '05:07:2021 09:30:55',
        status: 'todo',
        priority: false,
        id: 10,
      },
    ],
  };
  let wrapper;
  let store;
  let action;
  // const sortByDown = jest.fn();
  // const sortByUp = jest.fn();

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ListTask />
      </Provider>,
    );
  });
  it('ListTask Unit Test  render component ', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.state().props('tasks')).toEqual(initialState.tasks);
    // sections.simulate('click');
    // expect(store.sortByDown()).toBeCalled();
  });
});
