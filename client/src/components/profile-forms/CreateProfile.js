import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    officeaddrss: '',
    personalmobno: '',
    officemobno: '',
    emailidpersonal: '',
    emailidoffice: '',
    dateofjoining: '',
    company: '',
    website: '',
    location: '',
    status: '',
    designation: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    name,
    officeaddrss,
    personalmobno,
    officemobno,
    emailidpersonal,
    emailidoffice,
    dateofjoining,
    company,
    website,
    location,
    status,
    designation,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className='container'>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='formv' onSubmit={e => onSubmit(e)}>
        <div>
          <div className='form-group'>
            <select name='status' value={status} onChange={e => onChange(e)}>
              <option value='0'>* Select Professional Status</option>
              <option value='Police'>Police</option>
              <option value='Asst. Commisioner'>Asst. Commisioner</option>
              <option value='District Collector'>District Collector</option>
              <option value='Other'>Other</option>
            </select>
            <small className='form-text'>
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Name:</h4>
            </div>
            <input
              type='text'
              placeholder='name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Office Address:</h4>
            </div>
            <input
              type='text'
              placeholder='office Address'
              name='officeaddrss'
              value={officeaddrss}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Personal Contact info.:</h4>
            </div>
            <input
              type='text'
              placeholder='Mobile no.'
              name='personalmobno'
              value={personalmobno}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Office Contact info:</h4>
            </div>

            <input
              type='text'
              placeholder='Mobile No.'
              name='officemobno'
              value={officemobno}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Personal Email Address:</h4>
            </div>

            <input
              type='text'
              placeholder='Personal Email id'
              name='emailidpersonal'
              value={emailidpersonal}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Office Email Address:</h4>
            </div>

            <input
              type='text'
              placeholder='Office Email Address'
              name='emailidoffice'
              value={emailidoffice}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Date of Joining:</h4>
            </div>

            <input
              type='text'
              placeholder='Date of Joining'
              name='dateofjoining'
              value={dateofjoining}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>
              Date of joining at current Designation
            </small>
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Office Address:</h4>
            </div>
            <input
              type='text'
              placeholder='Office Address'
              name='company'
              value={company}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>
              Could be the company you work for
            </small>
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Website:</h4>
            </div>
            <input
              type='text'
              placeholder='Website'
              name='website'
              value={website}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>
              Could be your own or a company website
            </small>
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Location:</h4>
            </div>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>
              City & state suggested (eg. Dhule, Maharashtra)
            </small>
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4> Designation : </h4>
            </div>
            <input
              type='text'
              placeholder='* Designation'
              name='designation'
              value={designation}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>
              Please use comma separated values
            </small>
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Username:</h4>
            </div>
            <input
              type='text'
              placeholder='Github Username'
              name='githubusername'
              value={githubusername}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div>
              {' '}
              <h4>Bio:</h4>
            </div>
            <textarea
              placeholder='A short bio of yourself'
              name='bio'
              value={bio}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>Tell us a little about yourself</small>
          </div>

          <div className='my-2'>
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type='button'
              className='btn btn-light'
            >
              Add Social Network Links
            </button>
            <span>This field is Optional</span>
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
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
