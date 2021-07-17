import './MainPage.scss';
import Panel from '../../components/Panel';
import { Switch, Route } from 'react-router';
import TaskPage from '../../components/TaskPage';
import Stats from '../../components/Stats';
import Profile from '../../components/Profile';
import { Component } from 'react';
import TaskInfo from '../../components/TaskInfo/TaskInfo';
import usersOperations from '../../redux/users/operations-user';
import { connect } from 'react-redux';
import taskOperations from '../../redux/task/operations';

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
              <Route exact path="/tasks" component={TaskPage} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/stats" component={Stats} />
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
