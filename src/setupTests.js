// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, render, mount, unmount } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.unmount = unmount;

console.error = message => {
  throw new Error(message);
};
