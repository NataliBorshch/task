import * as React from 'react';
import { shallow } from 'enzyme';
import Stats from '../Stats';
import PieChart from '../Chart';

describe('Stats Components Utin Test  ', () => {
  let wrapper;
  it('Stats to have props to NavLink ', () => {
    wrapper = shallow(<Stats />);
    const name = wrapper.find('.page_name');
    const chart = wrapper.find(PieChart);
    expect(wrapper.length).toEqual(1);
    expect(name.text()).toEqual('Statistics of your tasks all the time');
    expect(chart).toBeDefined();
  });
});
