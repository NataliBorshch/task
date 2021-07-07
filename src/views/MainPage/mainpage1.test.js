import * as React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';

describe('Maim compomemt Unit Test ', () => {
  let wrapper;
  it('Main Page contains class name ', () => {
    wrapper.mount(<MainPage />);
    const main = wrapper.find('.main_page');
    expect(main.props);
  });
});
