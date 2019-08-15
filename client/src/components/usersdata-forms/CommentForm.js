import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommentaci } from '../../actions/userdata';
import Button from '@material-ui/core/Button';

const CommentForm = ({ userdataId, addCommentaci, commentType, dispType }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    addCommentaci(userdataId, { text }, commentType, dispType);
    setText('');
  };

  return (
    <Fragment>
      {/* <div className='bg-primary p'>
        <h3>Leave a Comment</h3>
      </div> */}
      <div className='form my-1' onSubmit={e => {}}>
        <textarea
          name='text'
          cols='3'
          rows='3'
          placeholder='Any Other Comments..'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button
          variant='contained'
          color='secondary'
          onClick={e => onSubmit(e)}
        >
          Comment
        </Button>
        {/* <input type='submit' className='btn btn-dark my-1' value='Submit' /> */}
        <small> {'<==='} Press this button to save Comments</small>
      </div>
    </Fragment>
  );
};

CommentForm.propTypes = {
  addCommentaci: PropTypes.func.isRequired
};

export default connect(
  null,
  { addCommentaci }
)(CommentForm);
