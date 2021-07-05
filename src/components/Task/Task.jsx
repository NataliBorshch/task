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

  componentDidMount() {
    this.setState({ showModal: true });
  }

  componentWillUnmount() {
    this.setState({ showModal: false });
  }

  onCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    return (
      item && (
        <>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.date_created}</td>
          <td>{item.description}</td>
          <td>
            <input
              type="checkbox"
              checked={item.priority}
              onChange={this.onTogglePriority}
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
            <button onClick={this.onRejectTask}>
              <Icon icon="minus" size={20} color="red" />
            </button>
            <button onClick={this.openModal}>
              <Icon icon="edit" size={20} color="blue" />
            </button>

            <button onClick={() => this.props.onRemove(item.id)}>
              <Icon icon="delete" size={20} color="red" />
            </button>
          </td>
        </>
      )
    );
  }
}

export default Task;
