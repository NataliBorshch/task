import React, { lazy, Suspense, Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import routers from './routers/routers';
import { Router } from '@material-ui/icons';

const MainPage = lazy(() =>
  import('./views/MainPage' /* webpackChunkName: "main-page" */),
);
const TasksPage = lazy(() =>
  import('../src/views/TaskPage' /* webpackChunkName: "tasks-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "register-page" */),
);

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Container>
          <AppBar />
          <Suspense fallback={<h1>Loading</h1>}>
            <Switch>
              <Route path={routers.main} exact component={MainPage} />
              <Route path={routers.tasks} component={TasksPage} />
              <Route path={routers.register} component={RegisterPage} />
              <Router path={routers.login} component={LoginPage} />
              <Redirect path={routers.main} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

export default App;
// const mapDispatchToProps = {
//   getCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
