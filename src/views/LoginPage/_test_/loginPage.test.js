import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginPage } from '../LoginPage';

const simulateChangeInput = (wrapper, input, newValue) => {
  let tag = wrapper.find(input);
  tag.simulate('change', {
    target: { value: newValue },
  });
  return wrapper.find(input);
};

describe('LoginPage Components Utin Test  ', () => {
  let wrapper;
  it('LoginPage initial state  ', () => {
    wrapper = shallow(<LoginPage />);
    const updateEmailInput = simulateChangeInput(
      wrapper,
      '#email',
      'test@email',
    );
    const updatePasswordInput = simulateChangeInput(
      wrapper,
      '#password',
      'password123456',
    );

    console.log(wrapper.debug());

    expect(updateEmailInput.text()).toEqual('test@email');
    expect(updatePasswordInput.prop('value')).toEqual('password123456');
  });
});