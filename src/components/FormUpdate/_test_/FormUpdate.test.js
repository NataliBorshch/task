import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { FormUpdate } from '../FormUpdate';

const initialState = {
  name: '',
  priority: false,
  status: '',
  description: '',
};

describe('FormUpdate Components Utin Test', () => {
  let wrapper;
  it('FormUpdate initial state', () => {
    wrapper = shallow(<FormUpdate />);
    wrapper.setState(initialState);
    expect(wrapper.state()).toEqual(initialState);
  });

  it('FormUpdate mount witch task  which needs to be updated', () => {
    const task = {
      name: 'Task1',
      priority: true,
      status: 'todo',
      description: 'coverage 80% ',
    };
    wrapper = shallow(<FormUpdate />);
    wrapper.setState(task);
    expect(wrapper.state()).toEqual(task);
  });
  it('FormUpdate called submit update task', () => {
    const updateTaskMock = jest.fn();
    const props = {
      updateTask: updateTaskMock,
    };
    wrapper = shallow(<FormUpdate {...props} />);
    const form = wrapper.find('.form_update');
    form.simulate('submit', { preventDefault: () => {} });
    wrapper.update();
    expect(updateTaskMock).toHaveBeenCalled();
  });

  it('FormUpdate Task  handleChange input', () => {
    wrapper = shallow(<FormUpdate />);
    const inputName = wrapper.find('input').first();
    const inputDescription = wrapper.find('input').at(1);
    const checkbox = wrapper.find('#checkbox');
    inputName.simulate('change', {
      target: {
        value: 'Task1222',
        name: 'name',
      },
    });
    inputDescription.simulate('change', {
      target: {
        value: 'create task with Angular',
        name: 'description',
      },
    });

    checkbox.simulate('click', {
      target: {
        value: false,
        name: 'priority',
      },
    });

    wrapper.update();
    expect(wrapper.state().name).toEqual('Task1222');
    expect(wrapper.state().description).toEqual('create task with Angular');
    expect(wrapper.state().priority).toEqual(false);
  });
});
