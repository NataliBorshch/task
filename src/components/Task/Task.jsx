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

  const onTogglePriority = ((event)=>{
    console.log(event.target.checked)
  })

  return (
    <>
      <th>{item.id}</th>
      <th>{item.name}</th>
      <th>{item.date_created}</th>
      <th>{item.description}</th>
      <th>
      <input type="checkbox" checked={item.priority} onChange={onTogglePriority} />
      </th>
      <th>
        <select  className='status_option' value={item.status} onChange={()=>{}}>
        <option >{item.status}</option></select>
        </th>
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
