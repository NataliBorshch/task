import * as React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal Components Utin Test  ', () => {
  let wrapper;

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  const Child = () => <div>"Yolo"</div>;
  const handleClick = jest.fn();

  afterEach(() => {
    wrapper.unmount();
  });

  it('Modal Compoments render witch children ', () => {
    wrapper = mount(
      <Modal>
        <Child />
      </Modal>,
    );

    const modalRoot = global.document.querySelector('#modal-root');
    expect(modalRoot).contains(Child).toBeTruthy();
  });

  it('Modal Unit  to be closer ', () => {
    const modalRoot = global.document.querySelector('#modal-root');
    modalRoot = mount(<Modal />);

    const overlay = modalRoot.find('#modal-root');
    overlay.simulate('click');

    overlay.unmount();
    expect(modalRoot).toBeFalsy();
  });
});
