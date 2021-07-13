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

  it('FormCreateTask is LOading', () => {
    wrapper = shallow(<FormCreateTask />);
    const form = wrapper.find('.form_create_task');
  });

  // it('FormCreateTask add newTask', () => {
  //   wrapper = shallow(<FormCreateTask />);
  //   const btnAdd = wrapper.find('.form_create_task');
  //   const event = Object.assign(jest.fn(), { preventDefault: () => {} });
  //   btnAdd.simulate('submit', event);
  //   wrapper.update();
  //   expect(wrapper.length).toEqual(1);
  //   expect(event.preventDefault).toBeCalled();
  // });
});
