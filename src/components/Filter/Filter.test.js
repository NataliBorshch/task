import * as React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter Components Utin Test  ', () => {
  let wrapper;
  it('Filter Unit Test ', () => {
    const onChange = jest.fn();
    const props = {
      value: 'filter',
      onChange,
    };
    wrapper = shallow(<Filter props={props} />);
    const nav = wrapper.find('form_input');
    nav.simulate('change');
  });
});
