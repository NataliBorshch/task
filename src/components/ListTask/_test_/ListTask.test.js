import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ListTask } from '../ListTask';
import Task from '../../Task';

const props = {
  task: {
    items: [
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
  },

  sortByUp: () => {},
  sortByDown: () => {},
};

describe('ListTask Components Utin Test  ', () => {
  let wrapper;
  it('ListTask initial state  ', () => {
    wrapper = shallow(<ListTask tasks={props.task.items} />);
    const tr = wrapper.find(Task);
    expect(tr.length).toEqual(2);
  });
  it('ListTask not to be render   ', () => {
    const props = [];
    wrapper = shallow(<ListTask tasks={props} />);
    const tr = wrapper.find(Task);
    expect(tr.length).toBe(0);
  });
  it('ListTask was sortUp ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(
      <ListTask sortByUp={sortMock} tasks={props.task.items} />,
    );
    const btnSort = wrapper.find('.sort_up').first();
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('id');
  });

  it('ListTask was sortDown ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(
      <ListTask sortByDown={sortMock} tasks={props.task.items} />,
    );
    const btnSort = wrapper.find('.sort_down').first();
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('id');
  });
});
