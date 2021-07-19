import * as React from 'react';
import { shallow } from 'enzyme';
import { TaskInfo } from '../TaskInfo';

const props = {
  allTask: [],
};

describe('TaskInfo Components Utin Test  ', () => {
  let wrapper;
  it('TaskInfo user don`t have task  ', () => {
    wrapper = shallow(<TaskInfo {...props} />);
    const todo = wrapper.find('p').at(1);
    const ready = wrapper.find('p').at(2);
    const progress = wrapper.find('p').at(3);
    const completed = wrapper.find('p').at(4);
    expect(todo.text()).toEqual('TODO :0');
    expect(ready.text()).toEqual('READY :0');
    expect(progress.text()).toEqual('IN PROGRESS :0');
    expect(completed.text()).toEqual('COMPLETED :0');
  });
  it('TaskInfo user have 1 task todo  ', () => {
    const props = {
      allTask: [
        {
          name: 'Natali',
          description: 'test1',
          createAt: '12:07:2021 10:33:22',
          status: 'TODO',
          priority: false,
          id: 3,
          reject: false,
        },
      ],
    };
    wrapper = shallow(<TaskInfo {...props} />);
    const todo = wrapper.find('p').at(1);
    const ready = wrapper.find('p').at(2);
    const progress = wrapper.find('p').at(3);
    const completed = wrapper.find('p').at(4);
    expect(todo.text()).toEqual('TODO :1');
    expect(ready.text()).toEqual('READY :0');
    expect(progress.text()).toEqual('IN PROGRESS :0');
    expect(completed.text()).toEqual('COMPLETED :0');
  });
});
