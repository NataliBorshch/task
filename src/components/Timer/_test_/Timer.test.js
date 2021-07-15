import * as React from 'react';
import { mount, shallow, unmount } from 'enzyme';
import { Timer } from '../Timer';

describe('Timer Utin Test ', () => {
  let wrapper;
  it('Timer mount ', () => {
    wrapper = shallow(<Timer />);
    jest.useFakeTimers();
    expect(wrapper.length).toBe(1);
    expect(wrapper.state('time')).toEqual(new Date().toLocaleTimeString());
  });
  it.skip('Timer  update after 1000 ', () => {
    wrapper = shallow(<Timer />);
    jest.useFakeTimers();
    wrapper.debug();
    jest.advanceTimersByTime(1000);
    wrapper.update();
    console.log(wrapper.debug());
    // expect(wrapper.state('time')).toEqual();
  });
});
