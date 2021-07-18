import { Component } from 'react';
// components
import TransitionsModal from '../Modal';
import ListTask from '../ListTask';
import Filter from '../Filter';
// styles
import './TaskPage.scss';
// done

class TaskPage extends Component {
  render() {
    return (
      <div className="page_task">
        <div className="box_task_page">
          <TransitionsModal />
          <Filter />
        </div>
        <div className="task_table">
          <ListTask />
        </div>
      </div>
    );
  }
}

export default TaskPage;
