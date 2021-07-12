import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  handleModalOverlay = event => {
    // console.dir(event.target);
    // console.dir(event.currentTarget);
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  handleModalKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleModalKeyDown);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleModalKeyDown);
  }

  render() {
    return createPortal(
      <div className="overlay" onClick={this.handleModalOverlay}>
        <div className="modal">{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
