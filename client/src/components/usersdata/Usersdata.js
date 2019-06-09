import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/usersdata/UserdataItem';

const Usersdata = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      Data
      <div className='userdata'>
        {usersdata.length > 0 ? (
          usersdata.map(userdata => (
            <UserdataItem key={userdata._id} userdata={userdata} />
          ))
        ) : (
          <h4>No Usersdata Found</h4>
        )}
      </div>
      {console.log('HI')}
    </Fragment>
  );
};

Usersdata.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { getUsersdata }
)(Usersdata);
