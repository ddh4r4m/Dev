import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteDeouserdata } from '../../actions/deouserdata';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import './mytable.css';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    padding: '1% 2%'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const DeouserdataTop = ({
  deleteDeouserdata,
  auth,
  deouserdata: {
    text,
    year,
    returntopolice,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    victimdetails,
    natureofcrime,
    utrnumI,
    utrnumII,
    utrnumIII,
    benefitsgivenbyACI,
    benefitsgivenbyACII,
    benefitsgivenbyACIII,
    isbenefitsgivenbyACI,
    isbenefitsgivenbyACII,
    isbenefitsgivenbyACIII,
    monetarycompbyDCI,
    monetarycompbyDCII,
    monetarycompbyDCIII,
    otherbenefitycompbyDCI,
    otherbenefitycompbyDCII,
    otherbenefitycompbyDCIII,
    monetarycompbyACI,
    monetarycompbyACII,
    monetarycompbyACIII,
    otherbenefitycompbyACI,
    otherbenefitycompbyACII,
    otherbenefitycompbyACIII,
    firstbenefitbypolice,
    firstbenefitbycommis,
    firstbenefitbycollector,
    firstbenefitbypolicedate,
    firstbenefitbycommisdate,
    firstbenefitbycollectordate,
    firstbenefitbypolicecomment,
    firstbenefitbycommcomment,
    firstbenefitbycollectorcomment,
    secondbenefitbypolice,
    secondbenefitbycommis,
    secondbenefitbycollector,
    secondbenefitbypolicedate,
    secondbenefitbycommisdate,
    secondbenefitbycollectordate,
    secondbenefitbypolicecomment,
    secondbenefitbycommcomment,
    secondbenefitbycollectorcomment,
    thirdbenefitbypolice,
    thirdbenefitbycommis,
    thirdbenefitbycollector,
    thirdbenefitbypolicedate,
    thirdbenefitbycommisdate,
    thirdbenefitbycollectordate,
    thirdbenefitbypolicecomment,
    thirdbenefitbycommcomment,
    thirdbenefitbycollectorcomment,
    sections,
    chargesheetdate,
    policeinvestigation,
    dateofcourtorder,
    courtresults,
    financialsupport,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    disabledata,
    closecase,
    othersections,
    othersectionsv2,
    sectionschanged,
    stagetwochange,
    docImage,
    doccImage,
    courtorder,
    postmortem,
    medicalreport,
    abcSummary,
    victimone,
    victimtwo,
    victimthree,
    victimfour,
    victimfive,
    victimsix,
    victimseven,
    victimeight,
    accusedone,
    accusedtwo,
    accusedthree,
    accusedfour,
    accusedfive,
    accusedsix,
    accusedseven,
    accusedeight,
    typeofatrocity,
    ipcapplied,
    sectionsapplied,
    typeofatrocityv2,
    ipcappliedv2,
    sectionsappliedv2,
    _id
  }
}) => {
  const classes = useStyles();

  var ipcappliedd = JSON.parse(ipcapplied);

  const handleClick = _id => {
    deleteDeouserdata(_id);
    return <Redirect to='/dashboard' />;
  };

  return (
    <Fragment>
      <div className='mybuttons'>
        <Link to={`/edit-deouserdata/${_id}`}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Edit Case
          </Button>
        </Link>

        {/* {!auth.loading && user === auth.user._id && ( */}
        <button
          onClick={e => window.confirm('Are You Sure?') && handleClick(_id)}
          type='button'
          className='btn btn-danger buttonn'
        >
          Delete <i className='fas fa-times' />
        </button>
        <Link to='/usersdata' className='btn btn-primary buttonn'>
          Go Back
        </Link>
      </div>
      <div style={{ display: 'flex' }}>
        <div className='mytable' style={{ width: '50%' }}>
          <div style={{ margin: '0 5%' }}>
            <h4>
              SERIAL NO : <span style={{ float: 'right' }}> {text}</span>
            </h4>
            <hr />
            <h4 className='display'>
              YEAR :<span style={{ float: 'right' }}> {year}</span>
            </h4>
            <hr />
            <h4 className='display'>
              POLICE STATION :
              <span style={{ float: 'right' }}> {policestation}</span>
            </h4>
            <hr />
            <h4 className='display'>
              CRIME REGISTER NO :
              <span style={{ float: 'right' }}> {crimeregisterno}</span>
            </h4>
            <hr />
            <h4 className='display'>
              DATE OF CRIME :
              <span style={{ float: 'right' }}> {dateofcrime}</span>
            </h4>
            <hr />
            <h4 className='display'>
              REGISTRATION DATE OF CRIME :
              <span style={{ float: 'right' }}> {regdateofcrime}</span>
            </h4>
            <hr />
            <h4 className='display'>
              VICTIM DETAILS :
              <span style={{ float: 'right' }}> {victimdetails}</span>
            </h4>
            <hr />
            <h4 className='display'>
              SUMMARY OF CRIME :
              <span style={{ float: 'right' }}> {natureofcrime}</span>
            </h4>
            <hr />
            <h4 className='display'>
              SECTIONS / PENAL CODES :
              <span style={{ float: 'right' }}>
                {' '}
                {ipcappliedd !== null
                  ? ipcappliedd.map((ipc, i) => (
                      <span key={ipc.value}>{ipc.value},</span>
                    ))
                  : ''}
              </span>
            </h4>
            <hr />
            <h4 className='display'>
              DATE OF COURT ORDER :
              <span style={{ float: 'right' }}> {dateofcourtorder}</span>
            </h4>
            <hr />
            <h4 className='display'>
              CHARGE SHEET DATE :
              <span style={{ float: 'right' }}> {chargesheetdate}</span>
            </h4>
            <hr />
            <h4 className='display'>
              POLICE INVESTIGATION :
              <span style={{ float: 'right' }}> {policeinvestigation}</span>
            </h4>
            <hr />
            <h4 className='display'>
              COURT RESULTS :
              <span style={{ float: 'right' }}> {courtresults}</span>
            </h4>
            <hr />
            <h4 className='display'>
              FIR FILE :
              <span style={{ float: 'right' }}>
                {docImage !== '' ? (
                  <Link to={`/${docImage}`}> Download here </Link>
                ) : (
                  <span style={{ float: 'right' }}>No File Found</span>
                )}
              </span>
            </h4>
            <hr />
            <h4 className='display'>
              CHARGESHEET FILE :
              <span style={{ float: 'right' }}>
                {doccImage !== '' ? (
                  <Link to={`/${doccImage}`}> Download here </Link>
                ) : (
                  <span style={{ float: 'right' }}>No File Found</span>
                )}
              </span>
            </h4>
            <hr />
          </div>
        </div>
        <div className='mytable' style={{ width: '50%' }}>
          {victimone !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM ONE :
                <span style={{ float: 'right' }}>
                  {victimone !== '' ? (
                    <Link to={`/${victimone}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {victimtwo !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM TWO :
                <span style={{ float: 'right' }}>
                  {victimtwo !== '' ? (
                    <Link to={`/${victimtwo}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {victimthree !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM THREE :
                <span style={{ float: 'right' }}>
                  {victimthree !== '' ? (
                    <Link to={`/${victimthree}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {victimfour !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM FOUR :
                <span style={{ float: 'right' }}>
                  {victimfour !== '' ? (
                    <Link to={`/${victimfour}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {victimfive !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM FIVE :
                <span style={{ float: 'right' }}>
                  {victimfive !== '' ? (
                    <Link to={`/${victimfive}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {victimsix !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM SIX :
                <span style={{ float: 'right' }}>
                  {victimsix !== '' ? (
                    <Link to={`/${victimsix}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {victimseven !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM SEVEN :
                <span style={{ float: 'right' }}>
                  {victimseven !== '' ? (
                    <Link to={`/${victimseven}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {victimeight !== '' && (
            <Fragment>
              <h4 className='display'>
                VICTIM EIGHT :
                <span style={{ float: 'right' }}>
                  {victimeight !== '' ? (
                    <Link to={`/${victimeight}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}

          {accusedone !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED ONE :
                <span style={{ float: 'right' }}>
                  {accusedone !== '' ? (
                    <Link to={`/${accusedone}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {accusedtwo !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED TWO :
                <span style={{ float: 'right' }}>
                  {accusedtwo !== '' ? (
                    <Link to={`/${accusedtwo}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {accusedthree !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED THREE :
                <span style={{ float: 'right' }}>
                  {accusedthree !== '' ? (
                    <Link to={`/${accusedthree}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {accusedfour !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED FOUR :
                <span style={{ float: 'right' }}>
                  {accusedfour !== '' ? (
                    <Link to={`/${accusedfour}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {accusedfive !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED FIVE :
                <span style={{ float: 'right' }}>
                  {accusedfive !== '' ? (
                    <Link to={`/${accusedfive}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {accusedsix !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED SIX :
                <span style={{ float: 'right' }}>
                  {accusedsix !== '' ? (
                    <Link to={`/${accusedsix}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
          {accusedseven !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED SEVEN :
                <span style={{ float: 'right' }}>
                  {accusedseven !== '' ? (
                    <Link to={`/${accusedseven}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}

          {accusedeight !== '' && (
            <Fragment>
              <h4 className='display'>
                ACCUSED EIGHT :
                <span style={{ float: 'right' }}>
                  {accusedeight !== '' ? (
                    <Link to={`/${accusedeight}`}> Download here </Link>
                  ) : (
                    <span style={{ float: 'right' }}>No File Found</span>
                  )}
                </span>
              </h4>
              <hr />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

DeouserdataTop.propTypes = {
  deouserdata: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteDeouserdata: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { deleteDeouserdata }
)(DeouserdataTop);
