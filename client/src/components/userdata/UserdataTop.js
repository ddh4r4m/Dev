import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteUserdata } from '../../actions/userdata';
import './mytable.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    padding: '1% 2%'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const UserdataTop = ({
  auth,
  userdata: {
    text,
    year,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    victimdetails,
    natureofcrime,
    sections,
    dateofcourtorder,
    chargesheetdate,
    policeinvestigation,
    courtresults,
    financialsupport,
    firstbenefitbypolice,
    firstbenefitbycommis,
    firstbenefitbycollector,
    firstbenefitbypolicecomment,
    firstbenefitbycommcomment,
    firstbenefitbycollectorcomment,
    secondbenefitbypolice,
    secondbenefitbycommis,
    secondbenefitbycollector,
    secondbenefitbypolicecomment,
    secondbenefitbycommcomment,
    secondbenefitbycollectorcomment,
    thirdbenefitbypolice,
    thirdbenefitbycommis,
    thirdbenefitbycollector,
    thirdbenefitbypolicecomment,
    thirdbenefitbycommcomment,
    thirdbenefitbycollectorcomment,
    _id
  }
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className='mybuttons'>
        <Link to={`/edit-userdata/${_id}`}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Edit Case
          </Button>
        </Link>

        {/* {!auth.loading && user === auth.user._id && ( */}
        <button
          onClick={e => window.confirm('Are You Sure?') && deleteUserdata(_id)}
          type='button'
          className='btn btn-danger buttonn'
        >
          Delete <i className='fas fa-times' />
        </button>
        <Link to='/usersdata' className='btn btn-primary buttonn'>
          Go Back
        </Link>
      </div>
      <div className='mytable'>
        <div style={{ margin: '0 5%' }}>
          <h4>
            SERIAL NO : <span style={{ float: 'right' }}> {text}</span>
          </h4>
          <hr />
          <h4 className='display'>
            YEAR :<span style={{ float: 'right' }}> {year}</span>
          </h4>
          <hr />
          <h4 className='display'>
            POLICE STATION :
            <span style={{ float: 'right' }}> {policestation}</span>
          </h4>
          <hr />
          <h4 className='display'>
            CRIME REGISTER NO :
            <span style={{ float: 'right' }}> {crimeregisterno}</span>
          </h4>
          <hr />
          <h4 className='display'>
            DATE OF CRIME :
            <span style={{ float: 'right' }}> {dateofcrime}</span>
          </h4>
          <hr />
          <h4 className='display'>
            REGISTRATION DATE OF CRIME :
            <span style={{ float: 'right' }}> {regdateofcrime}</span>
          </h4>
          <hr />
          <h4 className='display'>
            VICTIM DETAILS :
            <span style={{ float: 'right' }}> {victimdetails}</span>
          </h4>
          <hr />
          <h4 className='display'>
            NATURE OF CRIME :
            <span style={{ float: 'right' }}> {natureofcrime}</span>
          </h4>
          <hr />
          <h4 className='display'>
            SECTIONS / PENAL CODES :
            <span style={{ float: 'right' }}> {sections}</span>
          </h4>
          <hr />
          <h4 className='display'>
            DATE OF COURT ORDER :
            <span style={{ float: 'right' }}> {dateofcourtorder}</span>
          </h4>
          <hr />
          <h4 className='display'>
            CHARGE SHEET DATE :
            <span style={{ float: 'right' }}> {chargesheetdate}</span>
          </h4>
          <hr />
          <h4 className='display'>
            POLICE INVESTIGATION :
            <span style={{ float: 'right' }}> {policeinvestigation}</span>
          </h4>
          <hr />
          <h4 className='display'>
            COURT RESULTS :
            <span style={{ float: 'right' }}> {courtresults}</span>
          </h4>
          <hr />
          <h4 className='display'>
            FINANCIAL SUPPORT :
            <span style={{ float: 'right' }}> {financialsupport}</span>
          </h4>
          <hr />
        </div>

        <br />
      </div>
    </Fragment>
  );
};

UserdataTop.propTypes = {};

export default UserdataTop;
