import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/usersdata/UserdataItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './table.css';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const Usersdata = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  const [formData, setFormData] = useState({
    search: '',
    search1: '',
    search2: '',
    search3: '',
    search4: '',
    search5: ''
  });

  const { search, search1, search2, search3, search4, search5 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = usersdata.filter(usersdata => {
    return (
      usersdata.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
      usersdata.policestation.toLowerCase().indexOf(search1.toLowerCase()) !==
        -1
    );
  });

  const classes = useStyles();

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
      <Link to='create-userdata' style={{ marginBottom: '20px' }}>
        <Button variant='contained' color='primary' className={classes.button}>
          Create New Case
        </Button>
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

Usersdata.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { getUsersdata }
)(Usersdata);
