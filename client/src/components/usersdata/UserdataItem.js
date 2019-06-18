import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './table.css';
const ProfileItem = ({
  userdata: { text, year, policestation, _id, natureofcrime, crimeregisterno }
}) => (
  <Fragment>
    <tr>
      <td>{year}</td>
      <td>{text}</td>
      <td>{policestation}</td>
      <td>{crimeregisterno}</td>
      <td>{natureofcrime}</td>
      <td>
        <Link to={`/userdata/${_id}`} className='btn btn-primary'>
          View FIR
        </Link>
      </td>
    </tr>
  </Fragment>
);

ProfileItem.propTypes = {
  userdata: PropTypes.object.isRequired
};

export default ProfileItem;
