import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Task } from '../Task';

const item = {
  name: 'Natali',
  description: 'fhfghf',
  date_created: '12:07:2021 10:33:22',
  status: 'todo',
  priority: false,
  id: 3,
};
const onDelete = () => {};

describe('Task Components Utin Test  ', () => {
  let wrapper;
  it('Task initial state  ', () => {
    wrapper = shallow(<Task item={item} />);
    const id = wrapper.find('#id');
    const name = wrapper.find('#name');
    const date = wrapper.find('#date');
    const priority = wrapper.find('#priority');
    const description = wrapper.find('#description');
    const status = wrapper.find('#status');
    expect(wrapper.length).toEqual(1);
    expect(id.text()).toEqual(String(item.id));
    expect(name.text()).toEqual(item.name);
    expect(date.text()).toEqual(item.date_created);
    expect(description.text()).toEqual(item.description);
    expect(priority.prop('checked')).toEqual(item.priority);
    expect(status.text()).toEqual(item.status);
  });
  //   it('Task delete component ', () => {
  //     wrapper = shallow(<Task item={item} />);
  //     expect(wrapper.length).toEqual(1);

  //     const btnDelete = wrapper.find('#delete_task');
  //     btnDelete.simulate('click');
  //     wrapper.update();
  //     wrapper.find(Task);
  //     expect(wrapper.length).toEqual(0);
  //   });
});
