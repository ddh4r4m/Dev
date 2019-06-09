import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ userdata: { text, _id } }) => (
  <Fragment>
    <div className='profile bg-light'>
      {/* <img src={avatar} alt='' className='round-img' /> */}
      <div>
        <h2>{text}</h2>
        <Link to={`/userdata/${_id}`} className='btn btn-primary'>
          View FIR
        </Link>
      </div>
    </div>
  </Fragment>
);

ProfileItem.propTypes = {
  userdata: PropTypes.object.isRequired
};

export default ProfileItem;
