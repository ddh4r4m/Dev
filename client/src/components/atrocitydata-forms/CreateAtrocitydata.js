import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAtrocitydata } from '../../actions/atrocitydata';

const CreateAtrocitydata = ({ createAtrocitydata, history }) => {
  const [formData, setFormData] = useState({
    status: '',
    text: '',
    personalmobno: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const { status, text, personalmobno } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createAtrocitydata(formData, history);
  };

  return (
    <div className='container'>
      <h1 className='large text-primary'>Create Data Fields</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's add some information
      </p>
      <small>* = required field</small>
      <form className='formv' onSubmit={e => onSubmit(e)}>
        <div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='text'
              value={text}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>
              City & state suggested (eg. Dhule, Maharashtra)
            </small>
          </div>

          <input type='submit' className='btn btn-primary my-1' />
          <Link to='/dashboard' className='btn btn-light my-1'>
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
};

CreateAtrocitydata.propTypes = {
  createAtrocitydata: PropTypes.func.isRequired
};

export default connect(
  null,
  { createAtrocitydata }
)(withRouter(CreateAtrocitydata));
