import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { FormCreateTask } from '../FormCreateTask';

describe('FormCreateTask Components Utin Test', () => {
  const initialState = {
    name: '',
    description: '',
    date_created: 'DD:MM:YYYY hh:mm:ss',
    status: 'todo',
    priority: false,
  };
  const props = {
    task: {
      item: [],
      isLoading: false,
      filter: '',
    },
    addTask: () => {},
  };
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

  it('FormCreateTask is initial state', () => {
    const addTaskMock = jest.fn();
    const newProps = {
      ...props,
      addTask: addTaskMock,
    };
    wrapper = shallow(<FormCreateTask {...newProps} />);
    wrapper.setState(initialState);
    expect(wrapper.state()).toEqual(initialState);
  });

  it('FormCreateTask add newTask', () => {
    const addTaskMock = jest.fn();
    wrapper = shallow(<FormCreateTask addTask={addTaskMock} />);
    const btnAdd = wrapper.find('.form_create_task');
    btnAdd.simulate('submit', { preventDefault: () => {} });
    wrapper.update();

    expect(wrapper.length).toEqual(1);
    expect(addTaskMock).toHaveBeenCalled();
  });

  it('FormCreate Task  handleChange input', () => {
    wrapper = shallow(<FormCreateTask />);
    const inputName = wrapper.find('input').first();
    const inputDescription = wrapper.find('input').at(1);
    inputName.simulate('change', {
      target: {
        value: 'Task1',
        name: 'name',
      },
    });
    inputDescription.simulate('change', {
      target: {
        value: 'create task with TS',
        name: 'description',
      },
    });

    wrapper.update();
    expect(wrapper.state().name).toEqual('Task1');
    expect(wrapper.state().description).toEqual('create task with TS');
  });
});
