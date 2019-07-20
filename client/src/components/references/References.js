import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReferences } from '../../actions/reference';
import Spinner from '../layout/Spinner';
import UserdataItem from '../../components/mofmeeting/MofmeetingItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const References = ({ getReferences, reference: { references, loading } }) => {
  useEffect(() => {
    getReferences();
  }, [getReferences]);

  const classes = useStyles();

  return loading ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1>References</h1>
      <div className='userdata'>
        <ul style={{ listStyleType: 'disc' }}>
          <li>
            <a
              href='http://socialjustice.nic.in/ViewData/Details?mid=1242&catID=113'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Scheduled Castes and the Scheduled Tribes (Prevention of
              Atrocities) Act, 1989 and its Amendment
            </a>
          </li>
          <li>
            <a
              href='https://indiacode.nic.in/handle/123456789/2263'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Indian Penal Code, 1860
            </a>
          </li>
          <li>
            <a
              href='http://egazette.nic.in'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Gazette of India
            </a>
          </li>

          {references.length > 0 ? (
            references.map(
              reference => {
                return (
                  <li>
                    <a
                      href={`${reference.reference}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {reference.description}
                    </a>
                  </li>
                );
              }
              // <UserdataItem key={reference._id} reference={reference} />
            )
          ) : (
            <p>No Minutes of Meeting Found...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

References.propTypes = {
  getReferences: PropTypes.func.isRequired,
  reference: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  reference: state.reference
});

export default connect(
  mapStateToProps,
  { getReferences }
)(References);
