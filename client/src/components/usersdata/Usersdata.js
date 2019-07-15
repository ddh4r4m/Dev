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

const myStyle = {
  width: '30%',
  padding: '12px 20px',
  margin: '8px 2px',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'borderBox'
};

const Usersdata = ({ getUsersdata, userdata: { usersdata, loading } }) => {
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

  const [searchbox, displaSearchbox] = useState(false);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = usersdata.filter(usersdata => {
    return (
      usersdata.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
      usersdata.courtresults
        .toLowerCase()
        .indexOf(courtresults.toLowerCase()) !== -1 &&
      usersdata.crimeregisterno
        .toLowerCase()
        .indexOf(crimeregisterno.toLowerCase()) !== -1 &&
      usersdata.victimdetails
        .toLowerCase()
        .indexOf(victimdetails.toLowerCase()) !== -1 &&
      usersdata.dateofcourtorder
        .toLowerCase()
        .indexOf(dateofcourtorder.toLowerCase()) !== -1 &&
      usersdata.sectionsapplied
        .toLowerCase()
        .indexOf(sectionsapplied.toLowerCase()) !== -1 &&
      usersdata.ipcapplied.toLowerCase().indexOf(ipcapplied.toLowerCase()) !==
        -1 &&
      usersdata.typeofatrocity
        .toLowerCase()
        .indexOf(typeofatrocity.toLowerCase()) !== -1 &&
      usersdata.policestation
        .toLowerCase()
        .indexOf(policestation.toLowerCase()) !== -1
    );
  });

  const classes = useStyles();

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      {searchbox && (
        <div>
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
            placeholder='Search by Court Results..'
            name='courtresults'
            value={courtresults}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Register No..'
            name='crimeregisterno'
            value={crimeregisterno}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Victim..'
            name='victimdetails'
            value={victimdetails}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Date of Court Order..'
            name='dateofcourtorder'
            value={dateofcourtorder}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Sections Applied..'
            name='sectionsapplied'
            value={sectionsapplied}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by IPC Sections..'
            name='ipcapplied'
            value={ipcapplied}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Type of Atrocity..'
            name='typeofatrocity'
            value={typeofatrocity}
            onChange={e => onChange(e)}
          />
          <input
            style={myStyle}
            type='text'
            placeholder='Search by Police Station..'
            name='policestation'
            value={policestation}
            onChange={e => onChange(e)}
          />
        </div>
      )}
      <Link to='create-userdata' style={{ marginBottom: '20px' }}>
        <Button variant='contained' color='primary' className={classes.button}>
          Create New Case
        </Button>
      </Link>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        onClick={e => displaSearchbox(!searchbox)}
      >
        Search
      </Button>
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
    </div>
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
