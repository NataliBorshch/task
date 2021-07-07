import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Navigation from './Navigation';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Navigation Components Utin Test  ', () => {
  let wrapper;
  // beforeEach(() => {
  //   wraper.unmount();
  // });
  const props = {
    isAuthenticated: true,
  };

  it('Navigations witch Authenticated ', () => {
    wrapper = shallow(
      <BrowserRouter>
        <Navigation props={props} id="nav" />
      </BrowserRouter>,
    );
    const nav = wrapper.find('nav');
    expect(wrapper).toBeTruthy();
    expect(nav.prop.isAuthenticated).toEqual(props.isAuthenticated);
    // expect(nav).toHaveTextContent('Task');
  });
});
