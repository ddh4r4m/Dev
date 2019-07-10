import React, { Component, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store';
import { loadUser } from '../../actions/auth';

// export default function Authorization(WrappedComponent, allowedRoles, auth) {
//   return class extends React.Component {
//     componentWillReceiveProps(nextProps) {
//       console.log('Current props: ', this.props);
//       console.log('Next props: ', nextProps);
//     }
//     render() {
//       console.log('Current props: ', this.props);
//       console.log('Allowed ROles: ', auth);
//       // Wraps the input component in a container, without mutating it. Good!
//       return <WrappedComponent {...this.props} />;
//     }
//   };
// }

const Authorization = (WrappedComponent, allowedRoles) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  class DataFetcherLoadingWrapper extends React.Component {
    constructor(props) {
      super(props);

      this.state = store.getState();

      console.log(this.state.dasm);
    }

    render() {
      const {
        auth: {
          loading,
          isAuthenticated,
          user: { name }
        }
      } = this.state;

      if (!loading && !isAuthenticated) {
        return <h1>Not allowed</h1>;
      } else {
        console.log('user :', name === 'Police');
        return name === allowedRoles[0] ? (
          <WrappedComponent {...this.props} />
        ) : (
          <h1>K</h1>
        );
      }
    }
  }

  return DataFetcherLoadingWrapper;
};

export default Authorization;

// const Authorization = ({
//   component: Component,
//   allowedRoles,
//   auth: { isAuthenticated, loading, user },
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={props =>
//       !isAuthenticated && !loading ? (
//         <Redirect to='/login' />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// Authorization.propTypes = {
//   auth: PropTypes.object.isRequired,
//   user: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(Authorization);

// export default (WrappedComponent, allowedRoles) => {
//   class Authorization extends Component {
//     componentWillMount() {
//       if (this.props.isAuthenticated) {
//         return <h1>No Page</h1>;
//       }
//     }

//     componentWillUpdate(nextProps) {
//       if (nextProps.isAuthenticated) {
//         return <h1>No Page</h1>;
//       }
//     }
//     render() {
//       //   console.log(this.props.user && this.props.user.name === allowedRoles);
//       //   if (allowedRoles.includes(this.props.user.name)) {
//       return <WrappedComponent {...this.props} />;
//     }
//   }
//   //   function mapStateToProps({ auth: { isAuthenticated, user, loading } }) {
//   //     return {
//   //       isAuthenticated,
//   //       user,
//   //       loading
//   //     };
//   //   }

//   function mapStateToProps(state) {
//     isAuthenticated: state.auth.isAuthenticated;
//   }
//   return connect(mapStateToProps)(Authorization);
// };

// export default function(WrappedComponent, allowedRoles) {
//   class Authorization extends React.Component {
//     componentWillMount() {
//       if (!this.props.isAuthenticated && !this.props.loading) {
//         return <h1>No page</h1>;
//       }
//     }

//     render() {
//       console.log(...this.props);
//       return <WrappedComponent {...this.props} />;
//     }
//   }
//   Authorization.propTypes = {
//     isAuthenticated: React.PropTypes.object.isRequired,
//     loading: React.PropTypes.bool.isRequired
//   };

//   function mapStateToProps(state) {
//     return {
//       isAuthenticated: state.auth.isAuthenticated,
//       loading: state.auth.loading
//     };
//   }

//   return connect(mapStateToProps)(Authorization);
// }
