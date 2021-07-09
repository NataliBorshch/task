import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Filter from '../Filter';

describe('Filter Components Utin Test  ', () => {
  let wrapper;
  it('Filter Unit Test ', () => {
    // const onChange = jest.fn();
    // const props = {
    //   value: 'filter',
    //   onChange,
    // };
    wrapper = mount(<Filter />);
    const input = wrapper.find('form_input');
    expect(input.length).toBe(1);
  });
});
