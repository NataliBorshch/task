import * as React from 'react';
import { mount } from 'enzyme';
import AuthNav from './AuthNav';

describe('AuthNav Components Utin Test  ', () => {
  let wrapper;
  // beforeEach(() => {
  //   wraper.unmount();
  // });

  it('AuthNav witch Authenticated ', () => {
    wrapper = mount(<AuthNav />);
    const nav = wrapper.find('#auth_nav');
    expect(nav.children).toHaveTextContent('Task');
  });
});
