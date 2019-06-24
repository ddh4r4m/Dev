import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const Landing = ({ isAuthenticated }) => {
  const classes = useStyles();
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='landing'>
        <div className='light-overlay'>
          <div className='landing-inner'>
            <Typist cursor={{ show: false, blink: true }}>
              <h1 className='x-large'>
                Atrocity <br /> Act Help
              </h1>
            </Typist>
            {/* <img src="" alt=""/> */}
            <img
              className='emblem'
              alt='Emblem of India'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/256px-Emblem_of_India.svg.png'
            />
            <p className='lead'>
              File a FIR under Atrocity Act Protection and get help from other
              officials
            </p>
            <div style={{ marginLeft: '5px' }}>
              <Button
                variant='contained'
                href='/login'
                color='primary'
                className={classes.button}
              >
                Login
              </Button>
            </div>
            {/* <div className='buttons'>
            <Link
              to='/login'
              className='btn btn-blue'
              style={{ marginLeft: 15 }}
            >
              Login
            </Link>
          </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
