import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import spinners from './spinners.gif';
import spinner2 from './spinner2.gif';

export default () => (
  <Fragment>
    <img
      src={spinner2}
      style={{ width: '100px', margin: '300px auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
