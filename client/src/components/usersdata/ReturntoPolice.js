import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/usersdata/UserdataItem';
import './table.css';

const ReturntoPolice = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  // const [formData, setFormData] = useState({
  //   search: '',
  //   search1: false,
  //   search2: 'yes',
  //   search3: 'no'
  // });

  // const date3 = new Date();
  //create a date before 60 days = 5184000000 in milliseconds
  // const date5 = new Date(date3 - 5184000000);

  // const { search, search1, search2, search3 } = formData;

  // const onChange = e =>
  // setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = usersdata.filter(usersdata => {
    // const date4 = new Date(usersdata.date);
    // console.log(date4 <= date3);
    //return all data before 60 days
    //add more filter using &&
    // if (date4 >= date5) {
    return usersdata.returntopolice === false;
    // }
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
        <h2 style={{ color: 'black', fontSize: '20px' }}>
          Cases returned to Police
        </h2>
        <br />
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

ReturntoPolice.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { getUsersdata }
)(ReturntoPolice);
