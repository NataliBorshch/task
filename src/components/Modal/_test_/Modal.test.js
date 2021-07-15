import * as React from 'react';
import { mount, shallow, unmount } from 'enzyme';
import { Modal } from '../Modal';

describe('Modal component', () => {
  const Child = () => <div>Modal children</div>;
  let wrapper;

  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

  test.skip('should render components witch children', () => {
    wrapper = shallow(
      <Modal>
        <Child />
      </Modal>,
    );

    // не дом елемент
    const child = wrapper.find(Child);
    expect(child).toEqual('<div>Modal children</div>');
  });
});
