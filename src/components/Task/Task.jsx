import { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// component
import ModalEdit from '../ModalEdit';
// redux
import operations from '../../redux/task/operations';
// materia
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

// styles
import './Task.scss';

//  done

class Task extends Component {
  render() {
    const { item, onDelete, onRejectTask } = this.props;
    return (
      <>
        <th id="id" className={item.reject ? 'task_item_reject' : 'task_item'}>
          {item.id}
        </th>
        <th
          id="name"
          className={item.reject ? 'task_item_reject' : 'task_item'}
        >
          {item.name}
        </th>
        <th
          id="date"
          className={item.reject ? 'task_item_reject' : 'task_item'}
        >
          {moment(item.createAt).format('DD:MM:YYYY hh:mm:ss')}
        </th>
        <th
          id="description"
          className={item.reject ? 'task_item_reject' : 'task_item'}
        >
          {item.description}
        </th>
        <th className={item.reject ? 'task_item_reject' : 'task_item'}>
          {item.status}
        </th>
        <th className={item.reject ? 'task_item_reject' : 'task_item'}>
          <FormControlLabel
            control={
              <Checkbox checked={item.priority} id="priority" color="primary" />
            }
          />
        </th>

        <th className={item.reject ? 'task_item_reject' : 'task_item'}>
          <IconButton
            aria-label="reject"
            id="reject"
            onClick={() => onRejectTask(item.id, { reject: true })}
          >
            <RemoveCircleIcon />
          </IconButton>

          <ModalEdit item={item} />
          <IconButton
            aria-label="close"
            onClick={() => onDelete(item.id)}
            id="delete_task"
          >
            <DeleteIcon />
          </IconButton>
        </th>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(operations.removeTask(id)),
  onRejectTask: (id, data) => dispatch(operations.rejectionTask(id, data)),
});

export default connect(null, mapDispatchToProps)(Task);

export { Task };
