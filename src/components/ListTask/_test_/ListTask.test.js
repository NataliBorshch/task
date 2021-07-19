import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ListTask } from '../ListTask';
import Task from '../../Task';

const props = {
  tasks: [
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
  ],

  sortByUp: () => {},
  sortByDown: () => {},
};

describe('ListTask Components Utin Test  ', () => {
  let wrapper;
  it('ListTask initial state  ', () => {
    wrapper = shallow(<ListTask {...props} />);
    const tr = wrapper.find(Task);
    expect(tr.length).toEqual(2);
  });
  it('ListTask not to be render   ', () => {
    const props = [];
    wrapper = shallow(<ListTask tasks={props} />);
    const tr = wrapper.find(Task);
    expect(tr.length).toBe(0);
  });
  it('ListTask was sortUp id  ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByUp={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_up').first();
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('id');
  });

  it('ListTask was sortDown  id ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByDown={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_down').first();
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('id');
  });
  it('ListTask was sortUp name ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByUp={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_up').at(1);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('name');
  });

  it('ListTask was sortDown  name ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByDown={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_down').at(1);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('name');
  });

  it('ListTask was sortUp Date ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByUp={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_up').at(2);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('date_created');
  });

  it('ListTask was sortDown  Date', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByDown={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_down').at(2);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('date_created');
  });
  it('ListTask was sortUp description ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByUp={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_up').at(3);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('description');
  });

  it('ListTask was sortDown  description', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByDown={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_down').at(3);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('description');
  });
  it('ListTask was sortUp status ', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByUp={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_up').at(4);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('status');
  });

  it('ListTask was sortDown  status', () => {
    const sortMock = jest.fn();
    wrapper = shallow(<ListTask sortByDown={sortMock} tasks={props.tasks} />);
    const btnSort = wrapper.find('.sort_down').at(4);
    btnSort.simulate('click');
    wrapper.update();
    expect(sortMock).toHaveBeenCalledWith('status');
  });
});
