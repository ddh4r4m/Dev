import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  rooot: {
    padding: theme.spacing(2, 3)
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

const ProfileItem = ({
  mofmeeting: { title, description, mofmeeting, _id, date, name }
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div style={{ padding: '10px 10px' }}>
        <Paper className={classes.rooot}>
          <p style={{ margin: '1px' }}>Title : {title}</p>
          <p style={{ margin: '1px' }}>Description : {description}</p>
          <div style={{ color: 'green' }}>
            Posted on{' '}
            <Moment format='DD/MM/YYYY' style={{ color: 'teal' }}>
              {date}
            </Moment>{' '}
            By
            <span style={{ color: 'teal' }}> {name} </span>
            {'  '}
            <Link to={`/${mofmeeting}`} style={{ float: 'right' }}>
              <Button variant='contained' color='primary'>
                View Minutes of Meeting
              </Button>
            </Link>
          </div>
        </Paper>
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  userdata: PropTypes.object.isRequired
};

export default ProfileItem;
