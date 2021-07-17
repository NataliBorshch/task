import React, { lazy, Suspense, Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// conponents
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import Spinner from './components/Spinner/Spinner';
//  routers
import routers from './routers/routers';
import PrivateRoute from './routers/PrivatRouter';
import PublicRoute from './routers/PublicRoter';

// redux
import usersOperations from './redux/users/operations-user';

// lazy
// import LoginPage from './views/LoginPage';

const MainPage = lazy(() =>
  import('./views/MainPage' /* webpackChunkName: "main-page" */),
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
          <Suspense fallback={<Spinner />}>
            <Switch>
              {/* <PublicRoute
                path={routers.main}
                exact
                component={MainPage}
                redirectTo={routers.main}
                restricted
              /> */}
              {/* <Route path="/" component={MainPage}></Route> */}

              <PublicRoute
                exact
                path={routers.register}
                component={RegisterPage}
                redirectTo={routers.tasks}
                restricted
              />

              <PublicRoute
                exact
                path={routers.logins}
                component={LoginPage}
                redirectTo={routers.tasks}
                restricted
              />
              <PrivateRoute
                path={routers.main}
                component={MainPage}
                redirectTo={routers.logins}
              />

              <Redirect path={routers.login} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(usersOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
