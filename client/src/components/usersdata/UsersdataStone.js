import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/usersdata/UserdataItem';
import './table.css';

const UsersdataStone = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  const [formData, setFormData] = useState({
    search: '',
    search1: 'pending',
    search2: 'yes',
    search3: 'no'
  });

  const date3 = new Date();
  //create a date before 60 days = 5184000000 in milliseconds
  const date5 = new Date(date3 - 5184000000);

  const { search, search1, search2, serach3 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = usersdata.filter(usersdata => {
    const date4 = new Date(usersdata.date);
    const date7 = new Date(usersdata.firstbenefitbypolicedate);
    console.log('caee1', date7 > date4);
    console.log('caee2', date7 < date4);
    console.log(date7);
    // console.log(date4 <= date3);
    //return all data before 60 days
    //add more filter using &&
    //date4<=date5 for it to work
    if (date4 >= date5) {
      return (
        usersdata.firstbenefitbypolice
          .toLowerCase()
          .indexOf(search1.toLowerCase()) === -1 &&
        usersdata.firstbenefitbypolice
          .toLowerCase()
          .indexOf(search2.toLowerCase()) === -1 &&
        usersdata.firstbenefitbypolice
          .toLowerCase()
          .indexOf(search2.toLowerCase()) === -1
      );
    }
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
      <input
        type='text'
        placeholder='Search by serial..'
        name='search'
        value={search}
        onChange={e => onChange(e)}
      />
      <input
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
        <table className='fl-table'>
          <thead>
            <tr>
              <th>YEAR</th>
              <th>Serial No.</th>
              <th>POLICE STATION</th>
              <th>Register No.</th>
              <th>Nature </th>
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
    </Fragment>
  );
};

UsersdataStone.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { getUsersdata }
)(UsersdataStone);
