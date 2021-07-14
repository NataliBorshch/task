import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ListTask } from '../ListTask';
import Task from '../../Task';
import { Provider } from 'react-redux';

const props = {
  tasks: [
    {
      name: 'Natali',
      description: 'fhfghf',
      date_created: '12:07:2021 10:33:22',
      status: 'todo',
      priority: false,
      id: 2,
    },
    {
      name: 'Natali',
      description: 'fhfghf',
      date_created: '12:07:2021 10:33:22',
      status: 'todo',
      priority: false,
      id: 3,
    },
  ],

  sortByUp: () => {},
  sortByDown: () => {},
};

describe('ListTask Components Utin Test  ', () => {
  let wrapper;
  it('ListTask initial state  ', () => {
    wrapper = mount(
      <Provider store={props}>
        <ListTask tasks={props.tasks} />
      </Provider>,
    );
    const tr = wrapper.find(Task);
    console.log(tr.debug());
    expect(tr.length).toEqual(2);
  });
  it('ListTask was sortUp ', () => {
    const sortMock = jest.fn();
    const newProps = {
      ...props,
      sortByUp: sortMock,
    };
    wrapper = mount(<ListTask {...newProps} />);
    const btnSort = wrapper.find('.sort_up').first();
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('id');
  });
});
