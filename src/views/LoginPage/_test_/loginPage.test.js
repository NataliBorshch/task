import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { LoginPage } from '../LoginPage';

const initialState = { email: '', password: '' };
const props = {
  users: {
    user: {},
    token: false,
    error: null,
    isAuthorized: false,
  },
  onSubmit: () => {},
};

describe('LoginPage Components Utin Test', () => {
  let wrapper;
  it('LoginPage initial state', () => {
    wrapper = shallow(<LoginPage {...props} />);
    const formLogin = wrapper.find('.register_page');
    wrapper.setState(initialState);
    expect(formLogin).toHaveLength(1);
    expect(wrapper.state()).toEqual(initialState);
  });

  it('LoginPage Submit', () => {
    const onSubmitMock = jest.fn();
    wrapper = shallow(<LoginPage onSubmit={onSubmitMock} />);
    const form = wrapper.find('.register_form');
    form.simulate('submit', { preventDefault: () => {} });
    wrapper.update();
    expect(wrapper.length).toEqual(1);
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('LoginPage handleChange input', () => {
    wrapper = shallow(<LoginPage />);
    const inputEmail = wrapper.find('input').first();
    const inputPassword = wrapper.find('input').at(1);
    inputEmail.simulate('change', {
      target: {
        value: '1',
        name: 'email',
      },
    });

    inputPassword.simulate('change', {
      target: {
        value: '12345678',
        name: 'password',
      },
    });

    wrapper.update();
    expect(wrapper.state().email).toEqual('1');
    expect(wrapper.state().password).toEqual('12345678');
  });
});
