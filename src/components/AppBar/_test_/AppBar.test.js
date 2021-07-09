import * as React from 'react';
import { mount, shallow } from 'enzyme';
import AppBar from '../AppBar';

describe('AppBar Components Utin Test  ', () => {
  let wrapper;
  it('AppBar Unit Test  header to be defined ', () => {
    wrapper = shallow(<AppBar />);
    const header = wrapper.find('header');
    expect(header).toBeDefined();
    expect(header.length).toBe(1);
  });
});
