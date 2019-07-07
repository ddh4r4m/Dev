import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeousersdata } from '../../actions/deouserdata';
import Spinner from '../layout/Spinner';
import DeouserdataItem from '../../components/deousersdata/Deouserdataitem';
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

const Deousersdata = ({
  getDeousersdata,
  deouserdata: { deousersdata, loading }
}) => {
  useEffect(() => {
    getDeousersdata();
  }, [getDeousersdata]);

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

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = deousersdata.filter(deousersdata => {
    return (
      deousersdata.text.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
      deousersdata.courtresults
        .toLowerCase()
        .indexOf(courtresults.toLowerCase()) !== -1 &&
      deousersdata.crimeregisterno
        .toLowerCase()
        .indexOf(crimeregisterno.toLowerCase()) !== -1 &&
      deousersdata.victimdetails
        .toLowerCase()
        .indexOf(victimdetails.toLowerCase()) !== -1 &&
      deousersdata.dateofcourtorder
        .toLowerCase()
        .indexOf(dateofcourtorder.toLowerCase()) !== -1 &&
      deousersdata.sectionsapplied
        .toLowerCase()
        .indexOf(sectionsapplied.toLowerCase()) !== -1 &&
      deousersdata.ipcapplied
        .toLowerCase()
        .indexOf(ipcapplied.toLowerCase()) !== -1 &&
      deousersdata.typeofatrocity
        .toLowerCase()
        .indexOf(typeofatrocity.toLowerCase()) !== -1 &&
      deousersdata.policestation
        .toLowerCase()
        .indexOf(policestation.toLowerCase()) !== -1
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
        placeholder='Search by Court Results..'
        name='courtresults'
        value={courtresults}
        onChange={e => onChange(e)}
      />
      <input
        type='text'
        placeholder='Search by Register No..'
        name='crimeregisterno'
        value={crimeregisterno}
        onChange={e => onChange(e)}
      />
      <input
        type='text'
        placeholder='Search by Victim..'
        name='victimdetails'
        value={victimdetails}
        onChange={e => onChange(e)}
      />
      <input
        type='text'
        placeholder='Search by Date of Court Order..'
        name='dateofcourtorder'
        value={dateofcourtorder}
        onChange={e => onChange(e)}
      />
      <input
        type='text'
        placeholder='Search by Sections Applied..'
        name='sectionsapplied'
        value={sectionsapplied}
        onChange={e => onChange(e)}
      />
      <input
        type='text'
        placeholder='Search by IPC Sections..'
        name='ipcapplied'
        value={ipcapplied}
        onChange={e => onChange(e)}
      />
      <input
        type='text'
        placeholder='Search by Type of Atrocity..'
        name='typeofatrocity'
        value={typeofatrocity}
        onChange={e => onChange(e)}
      />
      <input
        type='text'
        placeholder='Search by Police Station..'
        name='policestation'
        value={policestation}
        onChange={e => onChange(e)}
      />
      <br />
      <Link to='create-deouserdata' style={{ marginBottom: '20px' }}>
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
              filtereddata.map(deouserdata => (
                <DeouserdataItem
                  key={deouserdata._id}
                  deouserdata={deouserdata}
                />
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

Deousersdata.propTypes = {
  getDeousersdata: PropTypes.func.isRequired,
  deouserdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  deouserdata: state.deouserdata
});

export default connect(
  mapStateToProps,
  { getDeousersdata }
)(Deousersdata);
