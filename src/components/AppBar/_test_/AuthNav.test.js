import * as React from 'react';
import { shallow } from 'enzyme';
import AuthNav from '../AuthNav';
import { NavLink } from 'react-router-dom';

describe('AuthNav Components Utin Test  ', () => {
  let wrapper;
  it('AuthNav Unit Test  witchout Authenticated ', () => {
    wrapper = shallow(<AuthNav />);
    const nav = wrapper.find(NavLink);
    expect(nav.first().props().to).toEqual('/login');
    expect(wrapper.find('NavLink')).toHaveLength(2);
    expect(nav.at(1).props().to).toEqual('/register');
  });
});
