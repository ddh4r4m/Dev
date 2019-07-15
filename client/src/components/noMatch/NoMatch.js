import React, { Component, Fragment } from 'react';
import './NoMatch.css';

export default class NoMatch extends Component {
  render() {
    return (
      <Fragment>
        <div className='mbody'>
          <h1 style={{ alignContent: 'center' }}>Page Not Found</h1>
        </div>
      </Fragment>
    );
  }
}
