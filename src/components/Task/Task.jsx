import { Component } from 'react';
import Icon from '../Icon';
import './Task.scss';
import Modal from '../Modal/Modal';
import FormUpdate from '../FormUpdate';
// import actions from '../../redux/task';
import { connect } from 'react-redux';
import operations from '../../redux/task/operations';

class Task extends Component {
  state = {
    showModal: false,
  };

  openModal = event => {
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
    return (
      <>
        <th id="id">{item.id}</th>
        <th id="name">{item.name}</th>
        <th id="date">{item.date_created}</th>
        <th id="description">{item.description}</th>
        <th>
          <input
            id="priority"
            type="checkbox"
            checked={item.priority}
            // onChange={this.onTogglePriority}
          />
        </th>
        <th>
          <select className="status_option" value={item.status}>
            <option id="status">{item.status}</option>
          </select>
        </th>
        <th>
          <button>
            <Icon icon="minus" size={20} color="red" />
          </button>
          <button onClick={this.openModal} type="button">
            <Icon icon="edit" size={20} color="blue" />
            {this.state.showModal && (
              <Modal onClose={this.onCloseModal}>
                <FormUpdate task={item} />
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
