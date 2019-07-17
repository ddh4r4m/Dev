import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getDeouserdataById } from '../../actions/deouserdata';
import DeouserdataTop from '../deouserdata/DeouserdataTop';
import CommentForm from '../deouserdata/CommentForm';
import CommentItem from '../deouserdata/CommentItem';
import RecommUser from '../deouserdata/RecommUser';
// import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: lightGreen
  },
  input: {
    display: 'none'
  }
}));

// const theme = createMuiTheme({
//   palette: {
//     primary: lightGreen
//   }
// });

const Deouserdata = ({
  getDeouserdataById,

  deouserdata: { deouserdata, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getDeouserdataById(match.params.id);
  }, [getDeouserdataById, match]);

  const [displayRecommendation, toggleRecommendation] = useState(false);
  const classes = useStyles();
  return (
    <Fragment>
      {deouserdata === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {/* <Redirect to={`/edit-deouserdata/${match.params.id}`} /> */}
          <div className='container'>
            <DeouserdataTop deouserdata={deouserdata} />
            <Button
              variant='contained'
              className={classes.button}
              onClick={() => toggleRecommendation(!displayRecommendation)}
            >
              Show Recommendation Details
            </Button>
            {displayRecommendation && <RecommUser deouserdata={deouserdata} />}
            <CommentForm deouserdataId={deouserdata._id} />
            <div className='comments'>
              {deouserdata.comments.map(comment => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  deouserdataId={deouserdata._id}
                />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Deouserdata.propTypes = {
  getDeouserdataById: PropTypes.func.isRequired,
  deouserdata: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  deouserdata: state.deouserdata,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getDeouserdataById }
)(Deouserdata);
