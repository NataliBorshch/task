import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { FormCreateTask } from '../FormCreateTask';

describe('FormCreateTask Components Utin Test', () => {
  let wrapper;
  it('FormCreateTask to be mount', () => {
    wrapper = shallow(<FormCreateTask />);
    const form = wrapper.find('.form_create_task');
    const labelNameTask = wrapper.find('.form_label').first();
    const labelDescription = wrapper.find('.form_label').at(1);
    expect(wrapper.length).toEqual(1);
    expect(form.length).toEqual(1);
    expect(labelNameTask.text()).toEqual('Name Task');
    expect(labelDescription.text()).toEqual('Description');
  });
  it('FormCreateTask add newTask', () => {
    // const newTask = {
    //   name: 'Natali',
    //   description: 'fhfghf',
    //   date_created: '12:07:2021 10:33:22',
    //   status: 'todo',
    //   priority: false,
    //   id: 3,
    // };
    const spy = jest.fn();
    wrapper = shallow(<FormCreateTask addTask={spy} />);
    const btnAdd = wrapper.find('.form_create_btn');
    btnAdd.simulate('click');
    wrapper.update();

    expect(wrapper.length).toEqual(1);
    expect(wrapper.props().addTask).toHaveBeenCalled();
  });
});
