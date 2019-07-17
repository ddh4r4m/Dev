import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../actions/profile';
import { connect } from 'react-redux';

const ProfileItem = ({
  deleteUser,
  auth,
  profile: {
    user: { _id, name, avatar },
    status,
    officeaddrss,
    personalmobno,
    officemobno,
    emailidpersonal,
    emailidoffice,
    dateofjoining,
    designation,
    company,
    location,
    skills,
    photo
  }
}) => {
  const onSubmit = e => {
    e.preventDefault();
    deleteUser(_id);
  };

  return (
    <Fragment>
      <div className='profile bg-light'>
        <img src={photo} alt='' className='round-img' />
        <div>
          <p style={{ color: 'blue' }}>{name}</p>
          <p>
            {status} {company && <span>at {company}</span>}
          </p>
          <p>{officeaddrss}</p>
          <p>{personalmobno}</p>
          <p>{officemobno}</p>
          <p>{emailidpersonal}</p>
          <p>{emailidoffice}</p>
          <p>{dateofjoining}</p>
          <p>{location && <span>{location}</span>}</p>

          {auth.user && auth.user.role === 'Asst. Commissioner' ? (
            <input
              type='submit'
              className='btn btn-primary my-1'
              value='DELETE USER'
              onClick={e => onSubmit(e)}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteUser }
)(ProfileItem);
