import React, { Fragment } from 'react';
import Navbar from '../../components/layout/Navbar';

const WithNavbar = WrappedComponent => {
  class WithNavbar extends React.Component {
    render() {
      return (
        <Fragment>
          <Navbar />
          <WrappedComponent {...this.props} />;
        </Fragment>
      );
    }
  }
  return WithNavbar;
};

export default WithNavbar;
