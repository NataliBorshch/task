import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Modal } from '../Modal';
import ReactDOM from 'react-dom';

const componentDidMountSpy = jest.spyOn(Modal.prototype, 'CompomentDidMount');
const componentDidWillUnmountSpy = jest.spyOn(
  Modal.prototype,
  'cocomponentDidWillUnmount',
);

const props = { children: <h1>chiilder modal</h1> };
const setUp = () => mount(<Modal {...props} />);

describe('Modal Components Utin Test  ', () => {
  let wrapper;

  beforeEach(() => {
    jest.spyOn(document.body, 'appendChild').mockImplementation(() => {});
    jest.spyOn(document.body, 'removeChild').mockImplementation(() => {});
    wrapper = setUp();
  });

  afterEach(() => {
    document.body.appendChild.mockRestore();
    document.body.removeChild.mockRestore();
  });

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should render Modal component Unit Test ', () => {
    expect(wrapper).toBeDefined();
  });
  it('should render children when component mount ', () => {
    expect(document.body.appendChild).toHaveBeenCalled(1);
  });

  it('should remove children when component unmount', () => {
    wrapper.unmount();
    expect(document.body.removeChild).toHaveBeenCalled(1);
  });
});
