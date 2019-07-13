import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById, deleteUser } from '../../actions/profile';

const Profile = ({
  deleteUser,
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match]);

  const onSubmit = e => {
    e.preventDefault();
    deleteUser(profile.user._id);
  };

  return (
    <Fragment>
      <div className='container'>
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <Fragment>
            Profile
            <Link to='/profiles' className='btn btn-light'>
              Back To Profiles
            </Link>
            {auth.user && auth.user.role === 'Asst. Commissioner' ? (
              <input
                type='submit'
                className='btn btn-primary my-1'
                onClick={e => onSubmit(e)}
              />
            ) : (
              ''
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById, deleteUser }
)(Profile);
