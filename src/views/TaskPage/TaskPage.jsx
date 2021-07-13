import { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/task/operations';
import selectors from '../../redux/task/selectors';

import FormCreateTask from '../../components/FormCreateTask/FormCreateTask';
import ListTasks from '../../components/ListTask';
import Filter from '../../components/Filter';
import './TaskPage.scss';

class TaskPage extends Component {
  componentDidMount() {
    this.props.getTask();
  }
  render() {
    console.log(this.props.isLoading);
    return (
      <div className="tasks_page">
        <div>
          <Filter />
          <FormCreateTask />
        </div>
        {this.props.isLoading ? <p id="loading">Loading...</p> : null}
        <ListTasks />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: selectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getTask: () => dispatch(operations.getTask()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);

export { TaskPage };
