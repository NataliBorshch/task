import * as React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Navigation } from '../Navigation';
import { NavLink } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Navigation Components Utin Test  ', () => {
  let wrapper;
  it('Navigation Unit Test  witch Authenticated ', () => {
    wrapper = shallow(<Navigation isAuthenticated={true} id="nav" />);
    const nav = wrapper.find(NavLink);
    expect(nav.first().props().to).toEqual('/home');
    expect(wrapper.find('NavLink')).toHaveLength(1);
  });
  it('Navigation Unit Test  not Authenticated ', () => {
    wrapper = shallow(<Navigation id="nav" isAuthenticated={false} />);
    const nav = wrapper.find(NavLink);
    expect(nav).not.toBe();
  });
});
