import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/layout/Spinner';
import {
  DashboardActions,
  DashboardActionss,
  DashboardActionse,
  DashboardActionsee
} from './DashboardActions';
import { getCurrentProfile } from '../../actions/profile';
import './dashboard.css';
import circlee from './Ellipsecircle.svg';
import triangle from './Polygontriangle.svg';
import square from './Rectanglesquare.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const classes = useStyles();
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='dashboardbackground'>
        <div style={{ margin: '10% 15%' }}>
          <img className='circlee' alt='circle' src={circlee} />
          <img className='square' alt='circle' src={square} />
          <img className='triangle' alt='circle' src={triangle} />
          <h1 className='large text-primary'>Welcome {user && user.name}</h1>

          {profile === null ? (
            <Fragment>
              <Link to='/create-profile'>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                >
                  CREATE PROFILE
                </Button>
              </Link>
            </Fragment>
          ) : user && user.name === 'Police' ? (
            <DashboardActionse />
          ) : user && user.name === 'Data Entry Operator' ? (
            <DashboardActionsee />
          ) : user && user.name === 'Asst. Commissioner' ? (
            <DashboardActionss />
          ) : (
            <DashboardActions />
          )}
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
