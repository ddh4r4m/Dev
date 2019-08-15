import React, { useRef } from 'react';
import CreateMeeting from './CreateMeeting';
import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href='#'>Print this out!</a>}
          content={() => this.componentRef}
        />
        <CreateMeeting ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;
