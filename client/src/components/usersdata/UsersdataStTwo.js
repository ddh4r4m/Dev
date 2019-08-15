import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/usersdata/UserdataItem';
import './table.css';

const UsersdataStTwo = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  const [formData, setFormData] = useState({
    search: '',
    search1: 'pending',
    stages: 'firstbenefitbypolice',
    days: 0
  });
  const myStyle = {
    width: '30%',
    padding: '12px 20px',
    margin: '8px 2px',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'borderBox'
  };

  const { search, search1, stages, days } = formData;

  const date3 = new Date();
  var date7 = new Date();
  //create a date before 60 days = 5184000000 in milliseconds
  const date5 = new Date(date3 - days);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = usersdata.filter(usersdata => {
    if (stages === 'firstbenefitbypolice') {
      date7 = new Date(usersdata.firstbenefitbypolicedate);
    } else if (stages === 'secondbenefitbypolice') {
      date7 = new Date(usersdata.secondbenefitbypolicedate);
    } else if (stages === 'thirdbenefitbypolice') {
      date7 = new Date(usersdata.thirdbenefitbypolicedate);
    } else if (stages === 'firstbenefitbycommis') {
      date7 = new Date(usersdata.firstbenefitbycommisdate);
    } else if (stages === 'secondbenefitbycommis') {
      date7 = new Date(usersdata.secondbenefitbycommisdate);
    } else if (stages === 'thirdbenefitbycommis') {
      date7 = new Date(usersdata.thirdbenefitbycommisdate);
    } else if (stages === 'firstbenefitbycollector') {
      date7 = new Date(usersdata.firstbenefitbycollectordate);
    } else if (stages === 'secondbenefitbycollector') {
      date7 = new Date(usersdata.secondbenefitbycollectordate);
    } else if (stages === 'thirdbenefitbycollector') {
      date7 = new Date(usersdata.thirdbenefitbycollectordate);
    }
    // console.log('date7', date7);
    // console.log('days', days);
    // console.log('date 5', date5);
    if (date5 >= date7) {
      return (
        usersdata[stages].toLowerCase().indexOf(search1.toLowerCase()) !== -1 &&
        usersdata.closethecase === false
      );
    }
  });

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div style={{ margin: '100px 50px' }}>
        <input
          style={myStyle}
          type='text'
          placeholder='Search by serial..'
          name='search'
          value={search}
          onChange={e => onChange(e)}
        />
        <input
          style={myStyle}
          type='text'
          placeholder='Search by POLICE..'
          name='search1'
          value={search1}
          onChange={e => onChange(e)}
        />
        <div className='form-group'>
          Select Stages
          <select name='stages' value={stages} onChange={e => onChange(e)}>
            <option value='firstbenefitbypolice'>Stage I : Police</option>
            <option value='secondbenefitbypolice'>Stage II : Police</option>
            <option value='thirdbenefitbypolice'>Stage III : Police</option>
            <option value='firstbenefitbycommis'>
              Stage I : Asst. Commissioner
            </option>
            <option value='secondbenefitbycommis'>
              Stage II : Asst. Commissioner
            </option>
            <option value='thirdbenefitbycommis'>
              Stage III : Asst. Commissioner
            </option>
            <option value='firstbenefitbycollector'>
              Stage I : District Collector
            </option>
            <option value='secondbenefitbycollector'>
              Stage II : District Collector
            </option>
            <option value='thirdbenefitbycollector'>
              Stage III : District Collector
            </option>
          </select>
        </div>
        <div className='form-group'>
          Select Type
          <select name='search1' value={search1} onChange={e => onChange(e)}>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
            <option value='pending'>Pending</option>
            <option value=''>All</option>
          </select>
        </div>
        <div className='form-group'>
          Select No of Days
          <select name='days' value={days} onChange={e => onChange(e)}>
            <option value='604800000'>7 days</option>
            <option value='5184000000'>60 days</option>
            <option value='31556952000'>1 year</option>
            <option value='86400000'>1 day</option>
            <option value='0'>0 day</option>
          </select>
        </div>
        <br />
        <Link
          to='create-userdata'
          className='btn btn-primary'
          style={{ marginBottom: '20px' }}
        >
          Create New FIR
        </Link>
        <div className='userdata'>
          <table className='fl-table'>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>YEAR</th>
                <th>POLICE STATION</th>
                <th>DATE OF CRIME</th>
                <th>FIR No.</th>
                <th>TYPE OF CRIME </th>
                <th>IPC </th>
                <th>Sections </th>
                <th>Other Sections </th>
                <th>Button </th>
              </tr>
            </thead>
            <tbody>
              {filtereddata.length > 0 ? (
                filtereddata.map(userdata => (
                  <UserdataItem key={userdata._id} userdata={userdata} />
                ))
              ) : (
                <tr>
                  <td>Case Data Not Found</td>
                  <td>Case Data Not Found</td>
                  <td>Case Data Not Found</td>
                  <td>Case Data Not Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

UsersdataStTwo.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { getUsersdata }
)(UsersdataStTwo);
