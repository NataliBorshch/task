import { Component } from 'react';
import Icon from '../Icon';
import './Task.scss';
import Modal from '../Modal/Modal';
import FormUpdate from '../FormUpdate';
// import actions from '../../redux/task';
import { connect } from 'react-redux';
import operations from '../../redux/task/operations';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

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
    // console.dir(event.target);
  };

  onTogglePriority = event => {
    // console.log(event.target.checked);
  };

  render() {
    const { item, onDelete } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <th id="id">{item.id}</th>
        <th id="name">{item.name}</th>
        <th id="date">{item.createdAt}</th>
        <th id="description">{item.description}</th>
        <th>
          <FormControlLabel
            control={<GreenCheckbox checked={item.priority} />}
            label="Priority Task"
          />
        </th>
        <th>
          {/* <select className="status_option" value={item.status}>
            <option id="status">{item.status}</option>
          </select> */}
          {item.status}
        </th>
        <th>
          <button>
            <Icon icon="minus" size={20} color="red" />
          </button>
          <button id="edit" onClick={this.openModal} type="button">
            <Icon icon="edit" size={20} color="blue" />
            {showModal && (
              <Modal onClose={this.onCloseModal}>
                <FormUpdate task={item} onClose={this.onCloseModal} />
              </Modal>
            )}
          </button>

          <button
            type="button"
            id="delete_task"
            onClick={() => onDelete(item.id)}
          >
            <Icon icon="delete" size={20} color="red" />
          </button>
        </th>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(operations.removeTask(id)),
});

export default connect(null, mapDispatchToProps)(Task);

export { Task };
