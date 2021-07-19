import * as React from 'react';
import { shallow } from 'enzyme';
import { FormUpdate } from '../FormUpdate';
import TextField from '@material-ui/core/TextField';

const props = {
  task: {
    name: '',
    priority: false,
    status: '',
    description: '',
  },
};

describe('FormUpdate Components Unit Test', () => {
  let wrapper;
  it('FormUpdate to be mount', () => {
    wrapper = shallow(<FormUpdate {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it('FormUpdate mount witch task  which needs to be updated', () => {
    const newProps = {
      task: {
        name: 'Task1',
        priority: true,
        status: 'todo',
        description: 'coverage 80% ',
      },
    };
    wrapper = shallow(<FormUpdate {...newProps} />);
    wrapper.setState(newProps.task);
    expect(wrapper.state()).toEqual(newProps.task);
  });
  it('FormUpdate called submit update task', () => {
    const updateTaskMock = jest.fn();
    const newProps = {
      ...props,
      updateTask: updateTaskMock,
    };
    wrapper = shallow(<FormUpdate {...newProps} />);
    const form = wrapper.find('.form_update');
    form.simulate('submit', { preventDefault: () => {} });
    wrapper.update();
    expect(updateTaskMock).toHaveBeenCalled();
  });

  it('FormUpdate Task  handleChange input', () => {
    const newProps = {
      task: {
        name: 'Task1',
        priority: true,
        status: 'todo',
        description: 'coverage 80% ',
      },
    };
    wrapper = shallow(<FormUpdate {...props} />);
    wrapper.setState(newProps.task);
    const inputName = wrapper.find(TextField).first();
    const inputDescription = wrapper.find(TextField).at(1);
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

    wrapper.update();
    expect(wrapper.state().name).toEqual('Task1222');
    expect(wrapper.state().description).toEqual('create task with Angular');
  });
});
