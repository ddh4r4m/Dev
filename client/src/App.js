import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import CreateUserdata from './components/usersdata-forms/CreateUserdata';
import Mofmeeting from './components/mofmeeting/Mofmeeting';
import Mofmeetings from './components/mofmeeting/Mofmeetings';
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
import DeoApprove from './components/deousersdata/DeoApprove';
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
import WithNavbar from './components/routing/WithNavbar';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Footer from './components/layout/Footer';
import Reference from './components/references/Reference';
import ReturntoPolice from './components/usersdata/ReturntoPolice';
import NoMatch from './components/noMatch/NoMatch';
import ResetPassword from './components/auth/ResetPassword';
import ForgotPassword from './components/auth/ForgotPassword';
import PrivateRouteI from './components/routing/PrivateRouteI';
import PrivateRouteII from './components/routing/PrivateRouteII';
import PrivateRouteIII from './components/routing/PrivateRouteIII';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router history={createBrowserHistory}>
        <Fragment>
          {/* <Navbar /> */}
          {/* <section className='container'> */}
          <Alert />
          <Switch>
            <Route exact path='/' component={WithNavbar(Landing)} />
            <Route exact path='/login' component={WithNavbar(Login)} />
            <Route exact path='/register' component={WithNavbar(Register)} />
            <PrivateRoute
              exact
              path='/profiles'
              component={WithNavbar(Profiles)}
            />
            <PrivateRouteI
              exact
              path='/usersdata'
              component={WithNavbar(Usersdata)}
            />
            <PrivateRouteIII
              exact
              path='/deousersdata'
              component={WithNavbar(Deousersdata)}
            />
            <PrivateRouteII
              exact
              path='/createpdf'
              component={WithNavbar(CreatePdf)}
            />
            <PrivateRoute
              exact
              path='/references'
              component={WithNavbar(Reference)}
            />
            <Route
              exact
              path='/deoapprove'
              component={WithNavbar(DeoApprove)}
            />
            <PrivateRouteII
              exact
              path='/mofmeeting'
              component={WithNavbar(Mofmeeting)}
            />
            <PrivateRouteII
              exact
              path='/mofmeetings'
              component={WithNavbar(Mofmeetings)}
            />
            <Route
              exact
              path='/reset/:token'
              component={WithNavbar(ResetPassword)}
            />
            <Route
              exact
              path='/forgotpassword'
              component={WithNavbar(ForgotPassword)}
            />
            <PrivateRoute
              exact
              path='/usersdatastone'
              component={WithNavbar(UsersdataStone)}
            />
            <PrivateRoute
              exact
              path='/returned'
              component={WithNavbar(ReturntoPolice)}
            />
            <PrivateRoute
              exact
              path='/usersdatasttwo'
              component={WithNavbar(UsersdataStTwo)}
            />
            <PrivateRoute
              exact
              path='/usersdatapcone'
              component={WithNavbar(UsersdataPCone)}
            />
            <PrivateRoute
              exact
              path='/usersdatapctwo'
              component={WithNavbar(UsersdataPCtwo)}
            />
            <PrivateRoute
              exact
              path='/usersdatappone'
              component={WithNavbar(UsersdataPPone)}
            />
            <PrivateRoute
              exact
              path='/usersdatapptwo'
              component={WithNavbar(UsersdataPPtwo)}
            />
            <PrivateRoute
              exact
              path='/usersdatappthree'
              component={WithNavbar(UsersdataPPthree)}
            />
            <PrivateRoute
              exact
              path='/profile/:id'
              component={WithNavbar(Profile)}
            />
            <PrivateRouteI
              exact
              path='/userdata/:id'
              component={WithNavbar(Userdata)}
            />
            <PrivateRoute
              exact
              path='/dashboard'
              component={WithNavbar(Dashboard)}
            />
            <PrivateRoute exact path='/posts' component={WithNavbar(Posts)} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={WithNavbar(CreateProfile)}
            />
            <PrivateRouteI
              exact
              path='/create-userdata'
              component={WithNavbar(CreateUserdata)}
            />
            <PrivateRouteIII
              exact
              path='/create-deouserdata'
              component={WithNavbar(CreateDeouserdata)}
            />
            <PrivateRoute
              exact
              path='/edit-profile'
              component={WithNavbar(EditProfile)}
            />
            <PrivateRouteI
              exact
              path='/edit-userdata/:id'
              component={WithNavbar(EditUserdata)}
            />
            <PrivateRouteIII
              exact
              path='/edit-deouserdata/:id'
              component={WithNavbar(EditDeouserdata)}
            />
            <PrivateRoute
              exact
              path='/edit-profilebyid/:id'
              component={WithNavbar(EditProfileById)}
            />
            <Route component={NoMatch} />
          </Switch>
          {/* </section> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
