import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createMofmeeting } from '../../actions/mofmeeting';
// import makeAnimated from 'react-select/animated';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Select from 'react-select';
// import Button from '@material-ui/core/Button';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  rooot: {
    padding: theme.spacing(5, 6)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Mofmeeting = ({ createMofmeeting, history, auth: { user } }) => {
  var formDataa = new FormData();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    returntopolice: false,
    mofmeeting: '',
    policestation: 'Dhule City',
    description: ''
  });

  // const animatedComponents = makeAnimated();

  // console.log(user && user.name === 'Sara');

  const {
    title,
    year,
    returntopolice,
    mofmeeting,
    policestation,
    description
  } = formData;

  //   const handleChange = typeofatrocity => {
  //     setTypeofatrocity(typeofatrocity);
  //   };
  //   const handleIpc = ipcapplied => {
  //     setIpc(ipcapplied);
  //   };
  //   const handleSections = sectionsapplied => {
  //     setSections(sectionsapplied);
  //   };
  //   const handleChangev2 = typeofatrocityv2 => {
  //     setTypeofatrocityv2(typeofatrocityv2);
  //   };
  //   const handleIpcv2 = ipcappliedv2 => {
  //     setIpcv2(ipcappliedv2);
  //   };
  //   const handleSectionsv2 = sectionsappliedv2 => {
  //     setSectionsv2(sectionsappliedv2);
  //   };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    formDataa.append(e.target.name, e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    formDataa.append('title', formData.title);
    formDataa.append('mofmeeting', mofmeeting);
    formDataa.append('description', description);
    createMofmeeting(formDataa, history);
    // for (const value of formDataa.values()) {
    //   console.log(value);
    // }
  };

  return (
    <Fragment>
      <div className='createuserbg'>
        <div style={{ margin: '10% 3%' }}>
          <Paper className={classes.rooot}>
            <h1 className='large text-primary'>Add Minutes of Meeting</h1>
            <p className='lead'>
              <i className='fas fa-user' /> Add Some information to Minutes of
              Meeting
            </p>
            {/* <small>* = required field</small> */}
            <form
              className='form'
              onSubmit={e => onSubmit(e)}
              encType='multipart/form-data'
              method='POST'
            >
              <div style={{ backgroundColor: 'white' }}>
                <div className='maindiv'>
                  <div className='form-group'>
                    Title
                    <input
                      type='text'
                      placeholder='Title'
                      name='title'
                      value={title}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />
                    <small className='form-text'>Could be a short Name</small>
                  </div>

                  <div className='form-group'>
                    Description
                    <textarea
                      type='text'
                      placeholder='Description'
                      name='description'
                      value={description}
                      onChange={e => onChange(e)}
                      disabled={
                        (user && user.name === 'Police') ||
                        (user && user.name === 'Data Entry Operator')
                      }
                    />
                  </div>
                </div>
                {/*  */}
                {
                  <Fragment>
                    <div className='maindiv'>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload Minutes of Meeting <br />
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
                          <input
                            type='file'
                            required
                            name='mofmeeting'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, mofmeeting: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                    </div>
                  </Fragment>
                }
              </div>
              <br />
              {/* Sticky Button */}

              {
                <Fragment>
                  {' '}
                  <input type='submit' className='btn btn-primary my-1' />{' '}
                </Fragment>
              }
              <Link to='/mofmeetings' className='btn btn-light my-1'>
                Go Back
              </Link>
            </form>
          </Paper>
        </div>
      </div>
    </Fragment>
  );
};

Mofmeeting.propTypes = {
  createMofmeeting: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createMofmeeting }
)(withRouter(Mofmeeting));
