import * as React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Timer from './Timer';

configure({ adapter: new Adapter() });
const props = {};

describe('Timer Components Utin Test  ', () => {
  let wrapper;
  // beforeEach(() => {
  //   wraper.unmount();
  // });

  it('Timer componentDidMount ', () => {
    const componentDidMount = () => {};
    const spy = jest.spyOn(componentDidMount, 'componentDidMount');
    const isDidmount = componentDidMount();
    wrapper = mount(<Timer />);

    const timer = wrapper.find('.timer');
    expect(isDidmount).toHaveBeenCalled(1);

    expect(timer).toBeDefined();

    // expect(nav).toHaveTextContent('Task');
  });
});
