import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import Icon from '../Icon';
import Modal from '../../components/Modal';
import FormUpdate from '../FormUpdate/FormUpdate';
import operations from '../../redux/task/operations';
import './Task.scss';

export default function Task({ item }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const onRemove = id => dispatch(operations.removeTask(id));

  const openModal = useCallback(() => {
    return setShowModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const onRejectTask = event => {
    console.dir(event.target);
  };

  const onTogglePriority = event => {
    console.log(event.target.checked);
  };

  return (
    <>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.date_created}</td>
      <td>{item.description}</td>
      <td>
        <input
          type="checkbox"
          checked={item.priority}
          onChange={onTogglePriority}
        />
      </td>
      <td>
        <select
          className="status_option"
          value={item.status}
          onChange={() => {}}
        >
          <option>{item.status}</option>
        </select>
      </td>
      <td>
        <button onClick={onRejectTask}>
          <Icon icon="minus" size={20} color="red" />
        </button>
        <button onClick={openModal}>
          <Icon icon="edit" size={20} color="blue" />
        </button>
        {showModal && (
          <Modal onClose={onCloseModal}>
            <FormUpdate item={item} />
          </Modal>
        )}
        <button onClick={() => onRemove(item.id)}>
          <Icon icon="delete" size={20} color="red" />
        </button>
      </td>
    </>
  );
}
