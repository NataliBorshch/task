import * as React from 'react';
import { shallow } from 'enzyme';
import Panel from '../Panel';
import { NavLink } from 'react-router-dom';

describe('Panel Components Utin Test  ', () => {
  let wrapper;
  it('Panel to have props to NavLink ', () => {
    wrapper = shallow(<Panel />);
    const nav = wrapper.find(NavLink);
    expect(wrapper.find('NavLink')).toHaveLength(3);
    expect(nav.first().props().to).toEqual('/home/tasks');
    expect(nav.at(1).props().to).toEqual('/home/profile');
    expect(nav.at(2).props().to).toEqual('/home/stats');
  });
  it('Panel to have  text ', () => {
    wrapper = shallow(<Panel />);
    const nav = wrapper.find(NavLink);
    expect(wrapper.find('NavLink')).toHaveLength(3);
    expect(nav.first().text()).toEqual('Task');
    expect(nav.at(1).text()).toEqual('Profile');
    expect(nav.at(2).text()).toEqual('Stats');
  });
});
