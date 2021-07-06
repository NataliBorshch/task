import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import Icon from '../Icon';
import Modal from '../../components/Modal';
import FormUpdate from '../FormUpdate/FormUpdate';
import operations from '../../redux/task/operations';
import './Task.scss';
import { Component } from 'react';

class Task extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };
  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  onRejectTask = event => {
    console.dir(event.target);
  };

  onTogglePriority = event => {
    console.log(event.target.checked);
  };

  render() {
    const { item } = this.props;
    return (
      <>
        <th>{item.id}</th>
        <th>{item.name}</th>
        <th>{item.date_created}</th>
        <th>{item.description}</th>
        <th>
          <input
            type="checkbox"
            checked={item.priority}
            // onChange={this.onTogglePriority}
          />
        </th>
        <th>
          <select
            className="status_option"
            value={item.status}
            onChange={() => {}}
          >
            <option>{item.status}</option>
          </select>
        </th>
        <th>
          {/* <button onClick={this.onRejectTask}>
            <Icon icon="minus" size={20} color="red" />
          </button> */}
          <button onClick={this.openModal}>
            <Icon icon="edit" size={20} color="blue" />
          </button>
          {/* {this.state.showModal && (
            <Modal onClose={this.onCloseModal}>
              <FormUpdate item={item} />
            </Modal>
          )} */}
          {/* <button onClick={() => this.props.onRemove(item.id)}>
            <Icon icon="delete" size={20} color="red" />
          </button> */}
        </th>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(operations.removeTask(id)),
});

export default (null, mapDispatchToProps)(Task);
