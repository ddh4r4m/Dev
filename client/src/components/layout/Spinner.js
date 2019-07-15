import React, { Fragment } from 'react';
import spinner2 from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner2}
      style={{ width: '100px', margin: '300px auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
