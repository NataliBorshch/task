import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../LoginPage';
import TextField from '@material-ui/core/TextField';

const initialState = { email: '', password: '' };

describe('LoginPage Components Utin Test', () => {
  let wrapper;
  it('LoginPage initial state', () => {
    wrapper = shallow(<LoginPage />);
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
    const inputEmail = wrapper.find(TextField).first();
    const inputPassword = wrapper.find(TextField).at(1);
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
