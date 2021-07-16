import React, { lazy, Suspense, Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// conponents
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
//  routers
import routers from './routers/routers';
import PrivateRoute from './routers/PrivatRouter';
import PublicRoute from './routers/PublicRoter';
// redux
import usersOperations from './redux/users/operations-user';
// lazy

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
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <>
        <Container>
          <AppBar />
          <Suspense fallback={<h1>Loading</h1>}>
            <Switch>
              <Route path={routers.main} exact component={MainPage} />
              <PrivateRoute
                path={routers.tasks}
                exact
                component={TasksPage}
                redirectTo={routers.logins}
              />
              <PublicRoute
                path={routers.logins}
                component={LoginPage}
                redirectTo={routers.tasks}
                restricted
              />

              <PublicRoute
                path={routers.register}
                redirectTo={routers.tasks}
                restricted
                component={RegisterPage}
              />
              <Redirect path={routers.main} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  getCurrentUser: usersOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
