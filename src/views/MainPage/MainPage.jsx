import { connect } from 'react-redux';
import { Component } from 'react';
import { Switch, Route } from 'react-router';
// component
import TaskPage from '../../components/TaskPage';
import Panel from '../../components/Panel';
import Stats from '../../components/Stats';
import Profile from '../../components/Profile';
import TaskInfo from '../../components/TaskInfo/TaskInfo';
// redux
import usersOperations from '../../redux/users/operations-user';
import taskOperations from '../../redux/task/operations';
// styles
import './MainPage.scss';

class MainPage extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getAllTask();
  }
  render() {
    return (
      <div>
        <div className="page_main">
          <div>
            <TaskInfo />
            <Panel />
          </div>
          <div>
            <Switch>
              <Route exact path="/home/tasks" component={TaskPage} />
              <Route exact path="/home/profile" component={Profile} />
              <Route exact path="/home/stats" component={Stats} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(usersOperations.getCurrentUser()),
  getAllTask: () => dispatch(taskOperations.getTask()),
});

export default connect(null, mapDispatchToProps)(MainPage);
