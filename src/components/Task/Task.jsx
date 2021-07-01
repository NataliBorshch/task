import { v4 as uuidv4 } from 'uuid';
import './Task.scss';
import Icon from '../Icon';
import Modal from '../../components/Modal';
import FormUpdate from '../FormUpdate/FormUpdate';
import operations from '../../redux/task/operations';
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';

export default function Task({ item }) {
  const dispatch = useDispatch();
  const onRemove = id => dispatch(operations.removeTask(id));
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    console.log('Modal open');
    return setShowModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onRejectTask = event => {
    console.dir(event.target);
    event.target.style.background = 'red';
  };
  return (
    <>
      <th>{item.id}</th>
      <th>{item.name}</th>
      <th>{item.date_created}</th>
      <th>{item.description}</th>
      <th>
        {item.priority} <input type="checkbox" />
      </th>
      <th>{item.status}</th>
      <th>
        <button onClick={onRejectTask}>
          <Icon icon="minus" size={20} color="red" />
        </button>
        <button onClick={openModal}>
          <Icon icon="edit" size={20} color="blue" />
        </button>
        {showModal && (
          <Modal onClose={onCloseModal}>
            <FormUpdate id={item.id} />
          </Modal>
        )}
        <button onClick={() => onRemove(item.id)}>
          <Icon icon="delete" size={20} color="red" />
        </button>
      </th>
    </>
  );
}
