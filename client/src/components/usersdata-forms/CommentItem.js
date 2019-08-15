import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/userdata';

const CommentItem = ({
  userdataId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className='bg-white'>
    <div>
      <p className='post-date'>{text}</p>
      <small>
        {' '}
        <p className='post-date'>
          Posted on <Moment format='DD/MM/YYYY'>{date}</Moment> by {name}
        </p>
      </small>
    </div>
  </div>
);

CommentItem.propTypes = {
  userdataId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
