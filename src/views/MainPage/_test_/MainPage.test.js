import * as React from 'react';
import { shallow } from 'enzyme';
import { MainPage } from '../MainPage';
import TaskInfo from '../../../components/TaskInfo/TaskInfo';
import Panel from '../../../components/Panel';
import { Route } from 'react-router';

const props = {
  getCurrentUser: jest.fn(),
  getAllTask: jest.fn(),
};

describe('MainPage Components Utin Test', () => {
  let wrapper;
  it('MainPage mount', () => {
    wrapper = shallow(<MainPage {...props} />);
    const page = wrapper.find('.page_main');
    const panel = wrapper.find(Panel);
    const taskInfo = wrapper.find(TaskInfo);
    expect(props.getCurrentUser).toHaveBeenCalled();
    expect(props.getAllTask).toHaveBeenCalled();
    expect(page.length).toEqual(1);
    expect(panel).toBeDefined();
    expect(taskInfo).toBeDefined();
  });
  it('MainPage mount to have routers', () => {
    wrapper = shallow(<MainPage {...props} />);
    const routers = wrapper.find(Route);
    expect(routers.length).toEqual(3);
  });
  it('MainPage routers have props', () => {
    wrapper = shallow(<MainPage {...props} />);
    const routersTask = wrapper.find(Route).first();
    const routersProfile = wrapper.find(Route).at(1);
    const routerStats = wrapper.find(Route).at(2);
    expect(routersTask.props().path).toEqual('/home/tasks');
    expect(routersProfile.props().path).toEqual('/home/profile');
    expect(routerStats.props().path).toEqual('/home/stats');
  });
});
