import * as React from 'react';
import { shallow } from 'enzyme';
import { Task } from '../Task';
import moment from 'moment';
const props = {
  item: {
    name: 'Natali',
    description: 'test1',
    createAt: '12:07:2021 10:33:22',
    status: 'todo',
    priority: false,
    id: 3,
    reject: false,
  },
  index: 1,
};

describe('Task Components Utin Test  ', () => {
  let wrapper;
  it('Task initial state  ', () => {
    wrapper = shallow(<Task {...props} />);
    const id = wrapper.find('#id');
    const name = wrapper.find('#name');
    const date = wrapper.find('#date');
    const description = wrapper.find('#description');

    expect(wrapper.length).toEqual(1);
    expect(id.text()).toEqual(String(props.index));
    expect(name.text()).toEqual(props.item.name);
    expect(date.text()).toEqual(
      moment(props.item.createAt).format('DD:MM:YYYY hh:mm:ss'),
    );
    expect(description.text()).toEqual(props.item.description);
  });
  it('Task delete component ', () => {
    const onDeleteMock = jest.fn();
    const newProps = {
      ...props,
      onDelete: onDeleteMock,
    };
    wrapper = shallow(<Task {...newProps} />);
    const btnDelete = wrapper.find('#delete_task');
    btnDelete.simulate('click');
    expect(onDeleteMock).toHaveBeenCalledWith(props.item.id);
  });
  it('Task  reject ', () => {
    const onRejectTaskMock = jest.fn();
    const newProps = {
      ...props,
      onRejectTask: onRejectTaskMock,
    };
    const data = {
      reject: true,
    };
    wrapper = shallow(<Task {...newProps} />);
    const btnReject = wrapper.find('#reject');
    btnReject.simulate('click');
    wrapper.update();

    expect(onRejectTaskMock).toHaveBeenCalledWith(props.item.id, data);
  });
});
