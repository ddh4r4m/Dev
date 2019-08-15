import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import {
  createAtrocitydata,
  getAtrocityDatas,
  addPoliceStation
} from '../../actions/atrocitydata';

const EditAtrocitydata = ({
  profile: { profile, loading },
  atrocitydata: {
    atrocitydatas: { _id, policestations }
  },
  createAtrocitydata,
  getAtrocityDatas,

  addPoliceStation,
  history
}) => {
  var formDataa = new FormData();
  const [formData, setFormData] = useState({
    name: '',
    policeStation: '',
    text: ''
  });

  useEffect(() => {
    getAtrocityDatas();

    //Fill the form with Current VAlues
    setFormData({
      name: loading || !profile.name ? '' : profile.name
    });
  }, [loading, getAtrocityDatas]);

  const { name, policeStation, text } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    createAtrocitydata(formData, history, true);
  };
  const onSubmitt = e => {
    e.preventDefault();
    addPoliceStation(_id, { text });
  };

  let optionItems =
    policestations !== undefined ? (
      policestations.map(planet => (
        <option key={planet.text}>{planet.text}</option>
      ))
    ) : (
      <option key={'Police'}>Police Station Data Not Found</option>
    );
  return (
    <div className='container'>
      <h1 className='large text-primary'>Add Some Fields</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='formv' onSubmit={e => onSubmit(e)}>
        <h1>Add Police Stations</h1>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Police Station'
            name='text'
            value={text}
            onChange={e => onChange(e)}
            required={true}
          />
          <Button
            variant='contained'
            color='secondary'
            onClick={e => onSubmitt(e)}
          >
            ADD POLICE STATION
          </Button>
        </div>
        <div>
          <select
            onChange={e => onChange(e)}
            name='policeStation'
            value={policeStation}
          >
            {optionItems}
          </select>
        </div>
        {policestations !== undefined ? (
          policestations.map(policest => {
            return <div key={policest._id}>{policest.text}</div>;
          })
        ) : (
          <h1>No Data Found</h1>
        )}
      </form>
    </div>
  );
};

EditAtrocitydata.propTypes = {
  createAtrocitydata: PropTypes.func.isRequired,
  getAtrocityDatas: PropTypes.func.isRequired,
  addPoliceStation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  atrocitydata: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  atrocitydata: state.atrocitydata
});

export default connect(
  mapStateToProps,
  { createAtrocitydata, getAtrocityDatas, addPoliceStation }
)(withRouter(EditAtrocitydata));
