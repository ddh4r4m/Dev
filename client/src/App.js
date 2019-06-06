import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import CreateUserdata from './components/usersdata-forms/CreateUserdata';
import EditUserdata from './components/usersdata-forms/EditUserdata';
import EditProfile from './components/profile-forms/EditProfile';
import EditProfileById from './components/profile/EditProfileById';
import Posts from './components/posts/Posts';
import Profiles from './components/profiles/Profiles';
import Usersdata from './components/usersdata/Usersdata';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/usersdata' component={Usersdata} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/create-userdata'
                component={CreateUserdata}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/edit-userdata/:id'
                component={EditUserdata}
              />
              <PrivateRoute
                exact
                path='/edit-profilebyid/:id'
                component={EditProfileById}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
