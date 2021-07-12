import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ListTask } from '../ListTask';
import { Task } from '../../Task';

const items = [
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
];
const sortByUp = () => {};
const sortByDown = () => {};

describe('ListTask Components Utin Test  ', () => {
  let wrapper;
  it('ListTask initial state  ', () => {
    wrapper = mount(<ListTask tasks={items} />);
    const tr = wrapper.find(Task);
    expect(tr.length).toEqual(2);
  });
  // не работает
  //   it('Task delete component ', () => {
  //     wrapper = mount(<ListTask tasks={item} />);
  //     expect(wrapper.length).toEqual(2);
  //     console.log(wrapper.debug());
  //     const tr = wrapper.find(Task);
  //     const btnDelete = tr.find('#delete_task');
  //     btnDelete.simulate('click');
  //     wrapper.update();
  //     wrapper.find(Task);
  //     expect(wrapper.length).toEqual(1);
  //   });
});
