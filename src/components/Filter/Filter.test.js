import * as React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

describe('Filter Components Utin Test  ', () => {
  let wrapper;
  it('Filter Unit Test ', () => {
    wrapper = shallow(<Filter value="fgf" />);
    const nav = wrapper.find('form_input');
    nav.simulate('change');
  });
});
