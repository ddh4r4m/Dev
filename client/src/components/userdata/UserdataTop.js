import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteUserdata } from '../../actions/userdata';
import './mytable.css';

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
  return (
    <div className='mytable'>
      <h1>TEXT : {text}</h1>
      <h4 className='display'>YEAR : {year} </h4>
      <h4 className='display'>POLICE STATION : {policestation}</h4>
      <h4 className='display'>CRIME REGISTER NO : {crimeregisterno}</h4>
      <h4 className='display'>DATE OF CRIME : {dateofcrime}</h4>
      <h4 className='display'>REGISTRATION DATE OF CRIME : {regdateofcrime}</h4>
      <h4 className='display'>VICTIM DETAILS : {victimdetails}</h4>
      <h4 className='display'>NATURE OF CRIME : {natureofcrime}</h4>
      <h4 className='display'>SECTIONS / PENAL CODES : {sections}</h4>
      <h4 className='display'>DATE OF COURT ORDER : {dateofcourtorder}</h4>
      <h4 className='display'>CHARGE SHEET DATE : {chargesheetdate}</h4>
      <h4 className='display'>POLICE INVESTIGATION : {policeinvestigation}</h4>
      <h4 className='display'>COURT RESULTS : {courtresults}</h4>
      <h4 className='display'>FINANCIAL SUPPORT : {financialsupport}</h4>
      <div className='mybuttons'>
        <Link to={`/edit-userdata/${_id}`} className='btn btn-primary buttonn'>
          Edit Userdata
        </Link>
        <Link to='/usersdata' className='btn btn-danger buttonn'>
          Delete
        </Link>
        <Link to='/usersdata' className='btn btn-primary buttonn'>
          Go Back
        </Link>
        {/* {!auth.loading && user === auth.user._id && ( */}
        <button
          onClick={e => window.confirm('Are You Sure?') && deleteUserdata(_id)}
          type='button'
          className='btn btn-danger buttonn'
        >
          <i className='fas fa-times' />
        </button>
      </div>
      <br />
    </div>
  );
};

UserdataTop.propTypes = {};

export default UserdataTop;
