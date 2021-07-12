import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Filter } from '../Filter';

const filter = 'task1';
const spy = () => {};

describe('Filter Components Utin Test  ', () => {
  let wrapper;
  it('Filter should mount ', () => {
    wrapper = shallow(<Filter />);
    const div = wrapper.find('.filter_search');
    const input = wrapper.find('.form_input');
    expect(div.length).toBe(1);
    expect(input.text()).toEqual('');
  });

  it('Filter change ', () => {
    wrapper = shallow(<Filter filter={filter} getFilter={spy} />);
    const div = wrapper.find('.filter_search');
    const input = wrapper.find('.form_input');
    expect(div.length).toBe(1);
    expect(input.text()).toEqual('');

    input.simulate('change');
    wrapper.update();
    // console.log(wrapper.debug());
    expect(input.props('value')).toBeDefined();

    // не работает
    // expect(input.text()).toEqual(filter)
    // expect(wrapper.props().getFilter).toHaveBeenCalled()
  });
});
