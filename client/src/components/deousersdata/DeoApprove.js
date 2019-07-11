import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeousersdata, editDeouserdata } from '../../actions/deouserdata';
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

const DeoApprove = ({
  getDeousersdata,
  editDeouserdata,
  deouserdata: { deousersdata, loading }
}) => {
  useEffect(() => {
    getDeousersdata();
    editDeouserdata();
  }, [getDeousersdata, editDeouserdata]);

  const [formData, setFormData] = useState({
    search: 'no',
    search1: 'pending'
  });

  const { search, search1 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const filtereddata = deousersdata.filter(deousersdata => {
    return (
      deousersdata.approve.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      deousersdata.approve.toLowerCase().indexOf(search1.toLowerCase()) !== -1
    );
  });

  const classes = useStyles();

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
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

DeoApprove.propTypes = {
  getDeousersdata: PropTypes.func.isRequired,
  editDeouserdata: PropTypes.func.isRequired,
  deouserdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  deouserdata: state.deouserdata
});

export default connect(
  mapStateToProps,
  { getDeousersdata, editDeouserdata }
)(DeoApprove);
