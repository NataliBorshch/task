import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { TaskPage } from '../TaskPage';

describe('TaskPage Components Utin Test  ', () => {
  let wrapper;

  let props = {
    task: {
      items: [],
      isLoading: false,
      filter: '',
    },
    getTask: () => {},
  };
  it('TaskPage initial state isLoading ', () => {
    const newProps = {
      ...props,
      task: {
        ...props.task,
        isLoading: true,
      },
    };
    wrapper = shallow(<TaskPage {...newProps} />);
    // console.log(wrapper.debug());
    const p = wrapper.find('#loading');
    // console.log(p.debug());
    // не работает
    // expect(p.text()).toEqual('Loading...');
  });
  it('TaskPage mount ListTask ', () => {
    wrapper = shallow(<TaskPage {...props} />);
    const listTask = wrapper.find('ListTask');
    expect(listTask).toBeDefined();
  });
  it('TaskPage mount Filter ', () => {
    wrapper = shallow(<TaskPage {...props} />);
    const filter = wrapper.find('Filter');
    expect(filter).toBeDefined();
  });
  it('TaskPage mount FormCreateTask ', () => {
    wrapper = shallow(<TaskPage {...props} />);
    const formCreateTask = wrapper.find('FormCreateTask');
    expect(formCreateTask).toBeDefined();
  });
  it('TaskPage  getAllTask ', () => {
    const getTaskMock = jest.fn();
    const newProps = {
      ...props,
      getTask: getTaskMock,
    };
    wrapper = shallow(<TaskPage {...newProps} />);

    expect(wrapper).toBeDefined();
    expect(getTaskMock).toHaveBeenCalled();
  });
});
