import * as React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('Maim compomemt Unit Test ', () => {
  let wrapper;
  it('Main Page to be mount ', () => {
    wrapper = shallow(<MainPage />);
    const main = wrapper.find('.main_page');
    const divAdvice = wrapper.find('main_advice');
    expect(wrapper).toHaveLength(1);
    expect(main).toBeDefined();
    expect(divAdvice).toBeDefined();
  });
  it('MainPage contains img ', () => {
    wrapper = shallow(<MainPage />);
    const divImg = wrapper.find('.main_img');
    const img1 = wrapper.find('img').first();
    const img2 = wrapper.find('img').at(1);
    expect(divImg).toBeDefined();
    expect(img1.props().src).toEqual(
      'https://ik.imagekit.io/s2fpg15d4rx/time_NifncTLm-ND.jpg',
    );
    expect(img2.props().src).toEqual(
      'https://ik.imagekit.io/s2fpg15d4rx/glasses1_4_fSdw54Wgo.jpg',
    );
  });
});
