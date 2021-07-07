import { Component } from 'react';
import { connect } from 'react-redux';
import FormCreateTask from '../components/FormCreateTask/FormCreateTask';
import operations from '../redux/task/operations';

import ListTasks from '../components/ListTask';
import Filter from '../components/Filter';
import './TaskPage.scss';

class TaskPage extends Component {
  componentDidMount() {
    this.props.getTask();
  }
  render() {
    return (
      <div className="tasks_page">
        <div>
          <Filter />
          <FormCreateTask />
        </div>
        <ListTasks />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTask: () => dispatch(operations.getTask()),
});

export default connect(null, mapDispatchToProps)(TaskPage);
