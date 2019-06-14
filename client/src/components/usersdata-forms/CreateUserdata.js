import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUserdata } from '../../actions/userdata';

const CreateUserdata = ({ createUserdata, history }) => {
  const [formData, setFormData] = useState({
    text: '',
    year: '',
    policestation: '',
    crimeregisterno: '',
    dateofcrime: '',
    regdateofcrime: '',
    victimdetails: '',
    natureofcrime: '',
    firstbenefitbypolice: '',
    firstbenefitbycommis: '',
    firstbenefitbycollector: '',
    firstbenefitbypolicecomment: '',
    firstbenefitbycommcomment: '',
    firstbenefitbycollectorcomment: '',
    sections: '',
    chargesheetdate: '',
    policeinvestigation: '',
    courtresults: '',
    financialsupport: '',
    dateofcourtorder: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    disabledata: false
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    text,
    year,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    victimdetails,
    natureofcrime,
    firstbenefitbypolice,
    firstbenefitbycommis,
    firstbenefitbycollector,
    firstbenefitbypolicecomment,
    firstbenefitbycommcomment,
    firstbenefitbycollectorcomment,
    sections,
    chargesheetdate,
    policeinvestigation,
    dateofcourtorder,
    courtresults,
    financialsupport,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    disabledata
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createUserdata(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's add some information to your profile
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          Serial No.
          <input
            type='text'
            placeholder='Serial No.'
            name='text'
            value={text}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Could be the defined format of serial no
          </small>
        </div>
        <div className='form-group'>
          Year of Crime
          <input
            type='date'
            placeholder='Year of Crime'
            name='year'
            value={year}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Name of Police Station
          <select
            name='policestation'
            value={policestation}
            onChange={e => onChange(e)}
          >
            <option value='Dhule City'>Dhule City </option>
            <option value='Aazadnagar' selected>
              Aazadnagar
            </option>
            <option value='Chalisgaon Road'>Chalisgaon Road</option>
            <option value='Mohadi Upnagar'>Mohadi Upnagar</option>
            <option value='Deopur Police Station'>Deopur Police Station</option>
            <option value='West Deopur'>West Deopur</option>
            <option value='Dhule Taluka'>Dhule Taluka</option>
            <option value='Songir'>Songir</option>
            <option value='Sakri'>Sakri</option>
            <option value='Pimplner'>Pimplner</option>
            <option value='Nijampur'>Nijampur</option>
            <option value='Shindkheda'>Shindkheda</option>
            <option value='Nardana'>Nardana</option>
            <option value='Dondaicha'>Dondaicha</option>
            <option value='Shirpur Taluka'>Shirpur Taluka</option>
            <option value='Shirpur City'>Shirpur City</option>
            <option value='Thalner'>Thalner</option>
          </select>
        </div>
        <div className='form-group'>
          Register No.
          <input
            type='text'
            placeholder='Register No.'
            name='crimeregisterno'
            value={crimeregisterno}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Date When Crime Happened
          <input
            type='date'
            placeholder='Date When Crime Happened'
            name='dateofcrime'
            value={dateofcrime}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Date when FIR was Registered
          <input
            type='date'
            placeholder='Date when FIR was Registered'
            name='regdateofcrime'
            value={regdateofcrime}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Details of Victim
          <input
            type='text'
            placeholder='Details of Victim'
            name='victimdetails'
            value={victimdetails}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Nature of Crime e.g: Murder
          <textarea
            rows='4'
            cols='2'
            type='text'
            placeholder='Nature of Crime e.g: Murder '
            name='natureofcrime'
            value={natureofcrime}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          First Benefit Recommendation by Police
          <input
            type='radio'
            name='firstbenefitbypolice'
            checked={firstbenefitbypolice === 'yes'}
            value='yes'
            onChange={e => onChange(e)}
          />{' '}
          Yes
          <input
            type='radio'
            name='firstbenefitbypolice'
            checked={firstbenefitbypolice === 'no'}
            value='no'
            onChange={e => onChange(e)}
          />{' '}
          No
        </div>
        <div className='form-group'>
          Comment on First benefit Recommendation by Police
          <input
            type='text'
            placeholder='Give the Reason for Recommendation'
            name='firstbenefitbypolicecomment'
            value={firstbenefitbypolicecomment}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          First Benefit Recommendation by Assistant Commisioner
          <input
            type='radio'
            name='firstbenefitbycommis'
            checked={firstbenefitbycommis === 'yes'}
            value='yes'
            onChange={e => onChange(e)}
          />{' '}
          Yes
          <input
            type='radio'
            name='firstbenefitbycommis'
            checked={firstbenefitbycommis === 'no'}
            value='no'
            onChange={e => onChange(e)}
          />{' '}
          No
        </div>
        <div className='form-group'>
          Comment on First benefit Recommendation by Asst. Commisioner
          <input
            type='text'
            placeholder='Give the Reason for Recommendation'
            name='firstbenefitbycommcomment'
            value={firstbenefitbycommcomment}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Decision for distribution of first Benefit District Collector
          <input
            type='radio'
            name='firstbenefitbycollector'
            checked={firstbenefitbycollector === 'yes'}
            value='yes'
            onChange={e => onChange(e)}
          />{' '}
          Yes
          <input
            type='radio'
            name='firstbenefitbycollector'
            checked={firstbenefitbycollector === 'no'}
            value='no'
            onChange={e => onChange(e)}
          />{' '}
          No
        </div>

        <div className='form-group'>
          Comment on First benefit Decision by District Collector
          <input
            type='text'
            placeholder='Give the Reason for Recommendation'
            name='firstbenefitbycollectorcomment'
            value={firstbenefitbycollectorcomment}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Applicable Penal Codes
          <input
            type='text'
            placeholder='Penal Codes Applicable'
            name='sections'
            value={sections}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Date of Court Order
          <input
            type='date'
            placeholder='Date of Court Order'
            name='dateofcourtorder'
            value={dateofcourtorder}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Date When Chargesheet was filed in the court
          <input
            type='date'
            placeholder='Date When Chargesheet was filed in the court'
            name='chargesheetdate'
            value={chargesheetdate}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Details from Police Investigation
          <textarea
            type='text'
            rows='4'
            placeholder='Details from Police Investigation'
            name='policeinvestigation'
            value={policeinvestigation}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Court Results
          <textarea
            rows='4'
            type='text'
            placeholder='Court Results'
            name='courtresults'
            value={courtresults}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          Financial Support to be Provided
          <textarea
            rows='4'
            type='text'
            placeholder='Financial Support to be Provided'
            name='financialsupport'
            value={financialsupport}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link to='/dashboard' className='btn btn-light my-1'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateUserdata.propTypes = {
  createUserdata: PropTypes.func.isRequired
};

export default connect(
  null,
  { createUserdata }
)(withRouter(CreateUserdata));
