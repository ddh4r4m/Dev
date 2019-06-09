import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserdataTop = ({ userdata: { text, _id } }) => {
  return (
    <div>
      <h1>{text}</h1>
      <Link to={`/edit-userdata/${_id}`} className='btn btn-primary'>
        Edit Userdata
      </Link>
      <Link to='/usersdata' className='btn btn-primary'>
        Go Back
      </Link>
    </div>
  );
};

UserdataTop.propTypes = {};

export default UserdataTop;
