import axios from 'axios';

export default function setAuthToken(token) {
  axios.defaults.headers.common['x-auth-token'] = '';
  delete axios.defaults.headers.common['x-auth-token'];

  if (token) {
    axios.defaults.headers.common['x-auth-token'] = `${token}`;
  }
}
