import * as React from 'react';
import { mount } from 'enzyme';
import UserMenu from '../UserMenu';

describe('UserMenu Components Utin Test  ', () => {
  let wrapper;
  it('UserMenu witch Authenticated ', () => {
    wrapper = mount(<UserMenu name={'lena'} />);
    const usermenu = wrapper.find('p');
    expect(usermenu.text()).toEqual('Wellcome lena');
  });
  it('UserMenu Unit Test is not Authenticated ', () => {
    wrapper = mount(<UserMenu name="" />);
    const usermenu = wrapper.find('p');
    expect(usermenu.text()).toEqual('Wellcome Guest');
  });
});
