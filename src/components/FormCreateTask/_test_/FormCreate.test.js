import * as React from 'react';
import { shallow, mount } from 'enzyme';
import FormCreate from '../FormCreateTask';

describe('FormCreate Components Utin Test  ', () => {
  let wrapper;
  it('FormCreate Unit Test to be render  ', () => {
    wrapper = shallow(<FormCreate />);
    const form = wrapper.find('form_create_task');
    expect(form.length).toBe(1);
  });
});
