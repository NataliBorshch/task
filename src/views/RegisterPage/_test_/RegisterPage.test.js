import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { RegisterPage } from '../RegisterPage';

const initialState = { email: '', password: '', name: '' };
const props = {
  users: {
    user: {},
    token: false,
    error: null,
    isAuthorized: false,
  },
  onSubmit: () => {},
};

describe('RegisterPage Components Utin Test  ', () => {
  let wrapper;
  it('RegisterPage initial state  ', () => {
    wrapper = shallow(<RegisterPage {...props} />);
    const form = wrapper.find('.register_page');
    wrapper.setState(initialState);
    expect(form).toHaveLength(1);
    expect(wrapper.state()).toEqual(initialState);
  });

  it('RegisterPage Submit ', () => {
    const onSubmitMock = jest.fn();
    wrapper = shallow(<RegisterPage onSubmit={onSubmitMock} />);
    const form = wrapper.find('.register_form');
    form.simulate('submit', { preventDefault: () => {} });
    wrapper.update();
    expect(wrapper.length).toEqual(1);
    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('LoginPage handleChange input', () => {
    wrapper = shallow(<RegisterPage />);
    const inputName = wrapper.find('input').first();
    const inputEmail = wrapper.find('input').at(1);
    const inputPassword = wrapper.find('input').at(2);
    inputName.simulate('change', {
      target: {
        value: 'Nina',
        name: 'name',
      },
    });
    inputEmail.simulate('change', {
      target: {
        value: 'nina@gmail.com',
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
    expect(wrapper.state().name).toEqual('Nina');
    expect(wrapper.state().email).toEqual('nina@gmail.com');
    expect(wrapper.state().password).toEqual('12345678');
  });
});
