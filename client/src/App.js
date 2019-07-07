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
import CreateDeouserdata from './components/deousersdata-forms/CreateDeouserdata';
import EditDeouserdata from './components/deousersdata-forms/EditDeouserdata';
import EditProfile from './components/profile-forms/EditProfile';
import EditProfileById from './components/profile/EditProfileById';
import CreatePdf from './components/createpdf/CreatePdf';
import Posts from './components/posts/Posts';
import Profiles from './components/profiles/Profiles';
import Usersdata from './components/usersdata/Usersdata';
import Deousersdata from './components/deousersdata/Deousersdata';
import UsersdataStone from './components/usersdata/UsersdataStone';
import UsersdataStTwo from './components/usersdata/UsersdataStTwo';
import UsersdataPCone from './components/usersdata/UsersdataPCone';
import UsersdataPCtwo from './components/usersdata/UsersdataPCtwo';
import UsersdataPPone from './components/usersdata/UsersdataPPone';
import UsersdataPPtwo from './components/usersdata/UsersdataPPtwo';
import UsersdataPPthree from './components/usersdata/UsersdataPPthree';
import Profile from './components/profile/Profile';
import Userdata from './components/userdata/Userdata';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Footer from './components/layout/Footer';

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
              <Route exact path='/deousersdata' component={Deousersdata} />
              <Route exact path='/createpdf' component={CreatePdf} />
              <PrivateRoute
                exact
                path='/usersdatastone'
                component={UsersdataStone}
              />
              <PrivateRoute
                exact
                path='/usersdatasttwo'
                component={UsersdataStTwo}
              />
              <PrivateRoute
                exact
                path='/usersdatapcone'
                component={UsersdataPCone}
              />
              <PrivateRoute
                exact
                path='/usersdatapctwo'
                component={UsersdataPCtwo}
              />
              <PrivateRoute
                exact
                path='/usersdatappone'
                component={UsersdataPPone}
              />
              <PrivateRoute
                exact
                path='/usersdatapptwo'
                component={UsersdataPPtwo}
              />
              <PrivateRoute
                exact
                path='/usersdatappthree'
                component={UsersdataPPthree}
              />
              <Route exact path='/profile/:id' component={Profile} />
              <Route exact path='/userdata/:id' component={Userdata} />
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
                path='/create-deouserdata'
                component={CreateDeouserdata}
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
                path='/edit-deouserdata/:id'
                component={EditDeouserdata}
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
