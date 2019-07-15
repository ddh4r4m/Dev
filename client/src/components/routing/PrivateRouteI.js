import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRouteI = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (user && user.role === 'Police') ||
        (user && user.role === 'Asst. Commissioner') ||
        (user && user.role === 'District Collector') ? (
        <Component {...props} />
      ) : (
        <Redirect to='/Dashboard' />
      )
    }
  />
);

PrivateRouteI.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRouteI);
