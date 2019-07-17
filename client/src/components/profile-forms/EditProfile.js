import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  var formDataa = new FormData();
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
    instagram: '',
    photo: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    //Fill the form with Current VAlues
    setFormData({
      name: loading || !profile.name ? '' : profile.name,
      photo: loading || !profile.photo ? '' : profile.photo,
      officeaddrss:
        loading || !profile.officeaddrss ? '' : profile.officeaddrss,
      personalmobno:
        loading || !profile.personalmobno ? '' : profile.personalmobno,
      officemobno: loading || !profile.officemobno ? '' : profile.officemobno,
      emailidpersonal:
        loading || !profile.emailidpersonal ? '' : profile.emailidpersonal,
      emailidoffice:
        loading || !profile.emailidoffice ? '' : profile.emailidoffice,
      dateofjoining:
        loading || !profile.dateofjoining ? '' : profile.dateofjoining,
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      designation: loading || !profile.designation ? '' : profile.designation,
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio
    });
  }, [loading, getCurrentProfile]);

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
    instagram,
    photo
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    formDataa.append('name', name);
    formDataa.append('officeaddrss', officeaddrss);
    formDataa.append('personalmobno', personalmobno);
    formDataa.append('officemobno', officemobno);
    formDataa.append('emailidpersonal', emailidpersonal);
    formDataa.append('emailidoffice', emailidoffice);
    formDataa.append('dateofjoining', dateofjoining);
    formDataa.append('company', company);
    formDataa.append('website', website);
    formDataa.append('location', location);
    formDataa.append('status', status);
    formDataa.append('designation', designation);
    formDataa.append('githubusername', githubusername);
    formDataa.append('bio', bio);
    formDataa.append('twitter', twitter);
    formDataa.append('facebook', facebook);
    formDataa.append('linkedin', linkedin);
    formDataa.append('youtube', youtube);
    formDataa.append('instagram', instagram);
    formDataa.append('photo', formData.photo);
    createProfile(formDataa, history, true);
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
            <h4>
              {' '}
              Upload Profile Pic <br />
            </h4>
            <input
              type='file'
              name='photo'
              onChange={e => {
                const vall = e.target.files[0];
                setFormData(prevState => {
                  return { ...prevState, photo: vall };
                });
              }}
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
