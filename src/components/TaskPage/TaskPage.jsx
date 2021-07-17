import { Component } from 'react';
import TransitionsModal from '../Modal';
import ListTask from '../ListTask';
import './TaskPage.scss';

class Task extends Component {
  render() {
    return (
      <div>
        <h>Task</h>
        <TransitionsModal />
        <div className="task_table">
          <ListTask />
        </div>
      </div>
    );
  }
}

export default Task;
