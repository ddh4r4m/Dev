import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './table.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

const ProfileItem = ({
  deouserdata: {
    text,
    year,
    policestation,
    _id,
    natureofcrime,
    crimeregisterno
  }
}) => (
  <Fragment>
    <tr>
      <td>{year}</td>
      <td>{text}</td>
      <td>{policestation}</td>
      <td>{crimeregisterno}</td>
      <td>{natureofcrime}</td>
      <td>
        <Link to={`/deouserdata/${_id}`}>
          <Button variant='contained' color='primary'>
            View CASE
          </Button>
        </Link>
      </td>
    </tr>
  </Fragment>
);

ProfileItem.propTypes = {
  deouserdata: PropTypes.object.isRequired
};

export default ProfileItem;
