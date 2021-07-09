import * as React from 'react';
import { shallow, mount } from 'enzyme';
import FormUpdate from '../FormUpdate';

describe('FormUpdate Components Utin Test  ', () => {
  let wrapper;
  it('FormUpdate Unit Test to be render  ', () => {
    wrapper = shallow(<FormUpdate />);
    const form = wrapper.find('form_update');
    expect(form.length).toBe(1);
  });
});
