import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { editUserdata, getUserdataById } from '../../actions/userdata';

const EditUserdataById = ({
  match,
  userdata: { userdata, loading },
  editUserdata,
  getUserdataById,
  history
}) => {
  const [formData, setFormData] = useState({
    text: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getUserdataById(match.params.id);

    setFormData({
      text: loading || !userdata.text ? '' : userdata.text
      //   text: 'Helo'
    });
  }, [loading, getUserdataById, match]);

  const { text, twitter, facebook, linkedin, youtube, instagram } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    editUserdata(match.params.id, formData, history);
  };

  return (
    <Fragment>
      {userdata === null || loading ? (
        <Spinner />
      ) : userdata === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Create Your Profile</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Let's add some information to your
            profile
          </p>
          <small>* = required field</small>
          <form className='form' onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Text'
                name='text'
                value={text}
                onChange={e => onChange(e)}
              />
              <small className='form-text'>
                Could be your own company or one you work for
              </small>
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
      )}
    </Fragment>
  );
};

EditUserdataById.propTypes = {
  editUserdata: PropTypes.func.isRequired,
  getUserdataById: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userdata: state.userdata
});

export default connect(
  mapStateToProps,
  { editUserdata, getUserdataById }
)(withRouter(EditUserdataById));

// import React, { Fragment, useState, useEffect } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { editUserdata, getUserdataById } from '../../actions/userdata';

// const EditUserdataById = ({
//   match,
//   getUserdataById,
//   history,
//   userdata: { userdata, loading },
//   editUserdata
// }) => {
//   const [formData, setFormData] = useState({
//     text: ''
//   });

//   useEffect(() => {
//     getUserdataById(match.params.id);

//     //Fill the form with Current VAlues
//     console.log(userdata);
//     setFormData({
//       text: loading || userdata.text ? '' : userdata.text
//     });
//   }, [match, getUserdataById, userdata, loading]);

//   const { text } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = e => {
//     e.preventDefault();
//     editUserdata(formData, history, true);
//   };
//   return (
//     <Fragment>
//       <form className='form' onSubmit={e => onSubmit(e)}>
//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Text'
//             name='text'
//             value={text}
//             onChange={e => onChange(e)}
//           />
//           <small className='form-text'>
//             Could be your own company or one you work for
//           </small>
//         </div>
//         <input type='submit' className='btn btn-primary my-1' />
//         <Link to='/usersdata' className='btn btn-light my-1'>
//           Go Back
//         </Link>
//       </form>
//     </Fragment>
//   );
// };

// EditUserdataById.propTypes = {
//   editUserdata: PropTypes.func.isRequired,
//   getUserdataById: PropTypes.func.isRequired,
//   userdata: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   userdata: state.userdata
// });

// export default connect(
//   mapStateToProps,
//   { editUserdata, getUserdataById }
// )(withRouter(EditUserdataById));
