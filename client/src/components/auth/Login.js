import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(18, 5),
    marginTop: 300,
    marginBottom: 80
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    marginLeft: theme.spacing(1)
  }
}));

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();

  //React Hooks
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  //Spread operator ...
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if Logged In
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div
        className='loginbackmground'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper
          className={classes.root}
          elevation={4}
          style={{ width: '50%', marginTop: '10px' }}
        >
          <h1 className='large text-primary'>Sign In</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Sign In to Your Account
          </p>
          <form className={classes.container} onSubmit={e => onSubmit(e)}>
            <div>
              <TextField
                id='outlined-full-widthh'
                label='Email'
                style={{ margin: 8 }}
                placeholder='example@gmail.com'
                fullWidth
                margin='normal'
                variant='outlined'
                onChange={e => onChange(e)}
                value={email}
                name='email'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <div>
              <TextField
                id='outlined-full-width'
                label='Password'
                style={{ margin: 8 }}
                placeholder='******'
                fullWidth
                margin='normal'
                variant='outlined'
                onChange={e => onChange(e)}
                value={password}
                type='password'
                name='password'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            {/* <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </div> */}
            {/* <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                minLength='6'
                value={password}
                onChange={e => onChange(e)}
              />
            </div> */}
            {/* <div>
              <TextField
                type='password'
                name='password'
                value={password}
                id='standard-textarea'
                label='Email'
                placeholder='example@gmail.com'
                multiline
                className={classes.textField}
                margin='normal'
                onChange={e => onChange(e)}
              />
            </div> */}
            <br />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              value='Login'
            >
              Submit
            </Button>
            {/* <input type='submit' className='btn btn-primary' value='Login' /> */}
          </form>
          <p className='my-1'>
            Don't have an account? <Link to='register'>Sign Up</Link>
          </p>
        </Paper>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
