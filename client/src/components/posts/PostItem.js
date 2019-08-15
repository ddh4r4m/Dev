import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/post';

const PostItem = ({
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => (
  <Fragment>
    <div className='post bg-white p-1 my-1'>
      <div>
        <a href='profile.html'>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className='my-1'>{text}</p>

        {/* <button type='button' className='btn btn-light'>
          <i className='fas fa-thumbs-up' />
          <span>{likes.length}</span>
        </button>
        <button type='button' className='btn btn-light'>
          <i className='fas fa-thumbs-down' />
        </button> */}
        {/* <Link to={`/posts/${_id}`} className='btn btn-primary'>
          Discussion <span className='comment-count'>{comments.length}</span>
        </Link> */}

        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={e => window.confirm('Are You Sure?') && deletePost(_id)}
            type='button'
            className='btn btn-danger'
          >
            DELETE POST
          </button>
        )}
      </div>
    </div>
  </Fragment>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostItem);
