import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getUserdataById } from '../../actions/userdata';
import UserdataTop from '../userdata/UserdataTop';
import CommentForm from '../userdata/CommentForm';
import CommentItem from '../userdata/CommentItem';
import RecommUser from '../userdata/RecommUser';

const Userdata = ({
  getUserdataById,
  userdata: { userdata, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getUserdataById(match.params.id);
  }, [getUserdataById, match]);
  return (
    <Fragment>
      {userdata === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div>
            <UserdataTop userdata={userdata} />
            <RecommUser userdata={userdata} />
            <CommentForm userdataId={userdata._id} />
            <div className='comments'>
              {userdata.comments.map(comment => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  userdataId={userdata._id}
                />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Userdata.propTypes = {
  getUserdataById: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userdata: state.userdata,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserdataById }
)(Userdata);
