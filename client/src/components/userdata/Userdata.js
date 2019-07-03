import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getUserdataById } from '../../actions/userdata';
import UserdataTop from '../userdata/UserdataTop';
import CommentForm from '../userdata/CommentForm';
import CommentItem from '../userdata/CommentItem';
import RecommUser from '../userdata/RecommUser';
import { Redirect } from 'react-router-dom';
import {
  createMuiTheme,
  withStyles,
  makeStyles
} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { lightGreen, purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: lightGreen
  },
  input: {
    display: 'none'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: lightGreen
  }
});

const Userdata = ({
  getUserdataById,
  userdata: { userdata, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getUserdataById(match.params.id);
  }, [getUserdataById, match]);

  const [displayRecommendation, toggleRecommendation] = useState(false);
  const classes = useStyles();
  return (
    <Fragment>
      {userdata === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {/* <Redirect to={`/edit-userdata/${match.params.id}`} /> */}
          <div>
            <UserdataTop userdata={userdata} />
            <Button
              variant='contained'
              className={classes.button}
              onClick={() => toggleRecommendation(!displayRecommendation)}
            >
              Show Recommendation Details
            </Button>
            {displayRecommendation && <RecommUser userdata={userdata} />}
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
