import * as React from 'react';
import { mount, shallow, unmount } from 'enzyme';
import { Timer } from '../Timer';

describe('Timer Utin Test', () => {
  let wrapper;
  it('Timer mount', () => {
    wrapper = shallow(<Timer />);
    jest.useFakeTimers();
    expect(wrapper.length).toBe(1);
    expect(wrapper.state('time')).toEqual(new Date().toLocaleTimeString());
  });
});
