import * as React from 'react';
import { shallow } from 'enzyme';

import MainPage from './MainPage';

describe('Maim compomemt Unit Test ', () => {
  let wrapper;
  it('Main Page contains class name ', () => {
    wrapper = shallow(<MainPage font-family="Satisfy" />);
    const main = wrapper.find('.main_page');
    expect(main.classList.contain('main_advice')).toHaveProperty(
      'font-family',
      'Satisfy',
    );
  });
});
