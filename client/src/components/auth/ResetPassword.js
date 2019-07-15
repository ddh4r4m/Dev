import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import { HeaderBar, inputStyle } from '../../components';
import { Button } from '@material-ui/core';

const loading = {
  margin: '1em',
  fontSize: '24px'
};

const title = {
  pageTitle: 'Password Reset Screen'
};

export default class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      updated: false,
      isLoading: true,
      error: false
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { token }
      }
    } = this.props;
    try {
      const response = await axios.get('/api/users/reset', {
        params: {
          resetPasswordToken: token
        }
      });
      // console.log(response);
      if (response.data.message === 'password reset link a-ok') {
        this.setState({
          email: response.data.email,
          updated: false,
          isLoading: false,
          error: false
        });
      }
    } catch (error) {
      console.log(error.response.data);
      this.setState({
        updated: false,
        isLoading: false,
        error: true
      });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  updatePassword = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const {
      match: {
        params: { token }
      }
    } = this.props;
    try {
      const response = await axios.put('/api/users/updatePasswordViaEmail', {
        email,
        password,
        resetPasswordToken: token
      });
      console.log(response.data);
      if (response.data.message === 'password updated') {
        this.setState({
          updated: true,
          error: false
        });
      } else {
        this.setState({
          updated: false,
          error: true
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const { password, error, isLoading, updated } = this.state;

    if (error) {
      return (
        <div className='container'>
          <HeaderBar title={title} />
          <div style={loading}>
            <h4>Problem resetting password. Please send another reset link.</h4>
            <Link to='/'>
              <Button variant='contained' color='primary'>
                Go Home
              </Button>
            </Link>
            <Link to='/forgotPassword'>
              <Button variant='contained' color='primary'>
                Forgot Password?
              </Button>
            </Link>
          </div>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className='container'>
          {/* <HeaderBar title={title} /> */}
          <div>Loading User Data...</div>
        </div>
      );
    }
    return (
      <div className='container'>
        {/* <HeaderBar title={title} /> */}
        <form className='password-form' onSubmit={this.updatePassword}>
          <TextField
            style={inputStyle}
            id='password'
            label='password'
            onChange={this.handleChange('password')}
            value={password}
            type='password'
          />
          <Button type='submit' variant='contained' color='primary'>
            Update Password
          </Button>
        </form>

        {updated && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
            <Link to='/login'>
              <Button variant='contained' color='primary'>
                Login
              </Button>
            </Link>
          </div>
        )}
        <Link to='/'>
          <Button variant='contained' color='primary'>
            Go Home
          </Button>
        </Link>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired
    })
  })
};
