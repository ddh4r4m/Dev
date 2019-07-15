import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRouteIII = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (user && user.role === 'Data Entry Operator') ||
        (user && user.role === 'Asst. Commissioner') ||
        (user && user.role === 'District Collector') ? (
        <Component {...props} />
      ) : (
        <Redirect to='/Dashboard' />
      )
    }
  />
);

PrivateRouteIII.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRouteIII);
