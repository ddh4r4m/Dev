import React, { useRef, useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
// import UserdataItem from '../../components/usersdata/UserdataItem';
import UserdataItem from './UserdataItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import './table.css';
import '../usersdata/table.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const myStyle = {
  width: '30%',
  padding: '12px 20px',
  margin: '8px 2px',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'borderBox'
};

const CreateMeeting = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  const [formData, setFormData] = useState({
    search: '',
    courtresults: '',
    crimeregisterno: '',
    victimdetails: '',
    dateofcourtorder: '',
    sectionsapplied: '',
    ipcapplied: '',
    typeofatrocity: '',
    policestation: ''
  });

  const {
    search,
    courtresults,
    crimeregisterno,
    victimdetails,
    dateofcourtorder,
    sectionsapplied,
    ipcapplied,
    typeofatrocity,
    policestation
  } = formData;

  const date = new Date();
  const date2 = new Date(date - 43200000);
  var tvalue1 = false;
  var tvalue2 = false;
  var tvalue3 = false;
  console.log('date2', date2);

  console.log(date);
  const [searchbox, displaSearchbox] = useState(false);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = usersdata.filter(usersdata => {
    if (usersdata.commentsdci.length !== 0) {
      console.log(Date('Userssdata Date', usersdata.commentsdci[0].date));
      console.log(Date(usersdata.commentsdci[0].date) >= Date(date2));
      const date3 = new Date(usersdata.commentsdci[0].date);
      const date4 = new Date(date2);
      tvalue1 = date3 > date4;
      if (tvalue1) {
        return tvalue1;
      }
      //return Date(usersdata.commentsdci[0].date) >= Date(date2);
    }
    if (usersdata.commentsdcii.length !== 0) {
      const date3 = new Date(usersdata.commentsdcii[0].date);
      const date4 = new Date(date2);
      tvalue2 = date3 > date4;
      if (tvalue2) {
        return tvalue2;
      }
      //return Date(usersdata.commentsdci[0].date) >= Date(date2);
    }
    if (usersdata.commentsdciii.length !== 0) {
      const date3 = new Date(usersdata.commentsdciii[0].date);
      const date4 = new Date(date2);
      tvalue3 = date3 > date4;
      if (tvalue3) {
        return tvalue3;
      }
      //return Date(usersdata.commentsdci[0].date) >= Date(date2);
    }
    if (usersdata.firstbenefitbycommisdate !== '') {
      const date3 = new Date(usersdata.firstbenefitbycommisdate);
      const date4 = new Date(date2);
      tvalue3 = date3 > date4;
      if (tvalue3) {
        return tvalue3;
      }
    } else if (usersdata.firstbenefitbycollectorcomment !== '') {
      const date3 = new Date(usersdata.firstbenefitbycollectorcomment);
      const date4 = new Date(date2);
      tvalue3 = date3 > date4;
      if (tvalue3) {
        return tvalue3;
      }
    }
    if (usersdata.secondbenefitbycommisdate !== '') {
      const date3 = new Date(usersdata.secondbenefitbycommisdate);
      const date4 = new Date(date2);
      tvalue3 = date3 > date4;
      if (tvalue3) {
        return tvalue3;
      }
    } else if (usersdata.secondbenefitbycollectorcomment !== '') {
      const date3 = new Date(usersdata.secondbenefitbycollectorcomment);
      const date4 = new Date(date2);
      tvalue3 = date3 > date4;
      if (tvalue3) {
        return tvalue3;
      }
    } else if (usersdata.thirdbenefitbycommisdate !== '') {
      const date3 = new Date(usersdata.thirdbenefitbycommisdate);
      const date4 = new Date(date2);
      tvalue3 = date3 > date4;
      if (tvalue3) {
        return tvalue3;
      }
    } else if (usersdata.thirdbenefitbycollectorcomment !== '') {
      const date3 = new Date(usersdata.thirdbenefitbycollectorcomment);
      const date4 = new Date(date2);
      tvalue3 = date3 > date4;
      if (tvalue3) {
        return tvalue3;
      }
    } else {
      return false;
    }
    // } else if (Date(usersdata.firstbenefitbycollectordate) > date2) {
    //   return true;
    // }

    // console.log('tvalue1', tvalue1);
    // console.log('tvalue2', tvalue2);
    // console.log('tvalue3', tvalue3);
    // return tvalue1 || tvalue2 || tvalue3;
    // return (
    //   usersdata.commentsdci.length !== 0 &&
    //   usersdata.commentsdci[0].date <= date
    // );
  });

  const classes = useStyles();

  return loading ? (
    <Spinner />
  ) : (
    <div style={{ margin: '100px 50px' }}>
      <div className='userdata'>
        <div>
          <textarea
            rows='4'
            cols='211'
            type='text'
            placeholder='Header'
            name='natureofcrime'
          />
          <textarea
            rows='4'
            cols='211'
            type='text'
            placeholder='Introduction'
            name='natureofcrime'
          />
        </div>
        <table className='fl-table'>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>DATE OF FIR</th>
              <th>POLICE STATION</th>
              <th>FIR No.</th>
              <th>VICTIM DETAILS</th>
              <th>SUMMARY</th>
              <th>TYPE OF CRIME </th>
              <th>IPC </th>
              <th>Sections </th>
              <th>Other Sections </th>
              <th>District Collector's Comments </th>
            </tr>
          </thead>
          <tbody>
            {filtereddata.length > 0 ? (
              filtereddata.map(userdata => (
                <Fragment>
                  <UserdataItem key={userdata._id} userdata={userdata} />
                </Fragment>
              ))
            ) : (
              <tr>
                <td>No FIR Data Found</td>
                <td>No FIR Data Found</td>
                <td>No FIR Data Found</td>
                <td>No FIR Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CreateMeeting.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { getUsersdata }
)(CreateMeeting);
