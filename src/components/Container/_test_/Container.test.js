import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Container from '../Container';

describe('Container Components Utin Test  ', () => {
  let wrapper;
  const children = <div>Children modal</div>;
  it('Container Unit Test ', () => {
    wrapper = shallow(<Container children={children} />);
    const container = wrapper.find('.container');
    expect(container.length).toEqual(1);
    expect(container.props().children).toEqual(children);
  });
});
