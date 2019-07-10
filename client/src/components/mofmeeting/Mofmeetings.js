import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMofmeetings } from '../../actions/mofmeeting';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/mofmeeting/MofmeetingItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const Mofmeetings = ({
  getMofmeetings,
  mofmeeting: { mofmeetings, loading }
}) => {
  useEffect(() => {
    getMofmeetings();
  }, [getMofmeetings]);

  const classes = useStyles();

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1>Minutes of Meeting</h1>
      <Link to='/mofmeeting' style={{ marginLeft: '10px' }}>
        <Button variant='contained' color='primary'>
          Add Minutes of Meeting
        </Button>
      </Link>
      <div className='userdata'>
        {mofmeetings.length > 0 ? (
          mofmeetings.map(mofmeeting => (
            <UserdataItem key={mofmeeting._id} mofmeeting={mofmeeting} />
          ))
        ) : (
          <p>No Minutes of Meeting Found...</p>
        )}
      </div>
    </div>
  );
};

Mofmeetings.propTypes = {
  getMofmeetings: PropTypes.func.isRequired,
  mofmeeting: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  mofmeeting: state.mofmeeting
});

export default connect(
  mapStateToProps,
  { getMofmeetings }
)(Mofmeetings);
