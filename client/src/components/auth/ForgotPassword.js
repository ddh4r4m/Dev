import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  sendEmail = async e => {
    e.preventDefault();
    console.log('sent');
    const { email } = this.state;
    if (email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true
      });
    } else {
      try {
        const response = await axios.post('/api/users/forgotPassword', {
          email
        });
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            showError: false,
            messageFromServer: 'recovery email sent',
            showNullError: false
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          this.setState({
            showError: true,
            messageFromServer: '',
            showNullError: false
          });
        }
      }
    }
  };

  render() {
    const { email, messageFromServer, showNullError, showError } = this.state;

    return (
      <div className='container'>
        {/* <HeaderBar title={title} /> */}
        <form className='profile-form' onSubmit={this.sendEmail}>
          <TextField
            // style={inputStyle}
            id='email'
            label='email'
            value={email}
            onChange={this.handleChange('email')}
            placeholder='Email Address'
          />
          <Button type='submit' variant='contained' color='primary'>
            'Send Password Reset Email'
          </Button>
        </form>
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              That email address isn&apos;t recognized. Please try again or
              register for a new account.
            </p>
            <Link to='/register'>
              <Button variant='contained' color='primary'>
                Register
              </Button>
            </Link>
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}
        <Link to='/'>
          <Button variant='contained' color='primary'>
            Go Home
          </Button>
        </Link>
        {/* <LinkButtons buttonText='Go Home' buttonStyle={homeButton} link='/' /> */}
      </div>
    );
  }
}

export default ForgotPassword;
