import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/usersdata/UserdataItem';
import './table.css';

const UsersdataDCone = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  const [formData, setFormData] = useState({
    search: '',
    search1: 'pending',
    search2: 'yes',
    search3: 'no'
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

  const date3 = new Date();
  //create a date before 7 days = 604800000 in milliseconds
  const date5 = new Date(date3 - 604800000);

  const { search, search1, search2, search3 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = usersdata.filter(usersdata => {
    const date4 = new Date(usersdata.date);
    // console.log(date4 <= date3);
    //return all data before 60 days
    //add more filter using &&
    return (
      usersdata.firstbenefitbycollector
        .toLowerCase()
        .indexOf(search1.toLowerCase()) !== -1 &&
      usersdata.closethecase === false
    );
    //  return (
    //   usersdata.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
    //   usersdata.policestation.toLowerCase().indexOf(search1.toLowerCase()) !==
    //     -1
    // );
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
        <br />
        <Link
          to='create-userdata'
          className='btn btn-primary'
          style={{ marginBottom: '20px' }}
        >
          Create New FIR
        </Link>
        <div className='userdata'>
          <h3>
            Cases Pending for 7 days or More by Asst. Commissioner : Stage I
          </h3>

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
    </Fragment>
  );
};

UsersdataDCone.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { getUsersdata }
)(UsersdataDCone);
