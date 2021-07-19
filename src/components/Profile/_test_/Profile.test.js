import * as React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../Profile';

describe('Profile Components Utin Test  ', () => {
  let wrapper;

  it('Profile mount with user info ', () => {
    const user = {
      name: 'vita',
      avatar: null,
      email: 'vata@gmail.com',
    };
    const taskCount = 10;
    wrapper = shallow(<Profile user={user} taskCount={taskCount} />);
    const name = wrapper.find('.user_info').first();
    const password = wrapper.find('.user_info').at(1);
    const email = wrapper.find('.user_info').at(2);
    const countTask = wrapper.find('.user_info').at(3);
    expect(wrapper).toBeDefined();
    expect(name.text()).toEqual(user.name);
    expect(password.text()).toEqual('***********');
    expect(email.text()).toEqual(user.email);
    expect(countTask.text()).toEqual(String(taskCount));
  });
});
