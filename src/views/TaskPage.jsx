import { Component } from 'react';
import { connect } from 'react-redux';
import FormCreateTask from '../components/FormCreateTask/FormCreateTask';
import operations from '../redux/task/operations';
import ListTasks from '../components/ListTask';
import Filter from '../components/Filter';
import './TaskPage.scss';
// import { Pie } from 'react-chartjs-2';

class TaskPage extends Component {
  state = {};

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    return (
      <div className="tasks_page">
        <div>
          <Filter />
          <FormCreateTask />
          {/* <Pie /> */}
        </div>

        <ListTasks />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(operations.getTask()),
});

export default connect(null, mapDispatchToProps)(TaskPage);
