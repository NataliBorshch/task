import * as React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('Maim compomemt Unit Test ', () => {
  let wrapper;
  it('Main Page contains class name ', () => {
    wrapper = shallow(<MainPage />);
    const main = wrapper.find('.main_page');
    // expect(main).toHaveProperty('font-family', 'Satisfy');
  });
});
