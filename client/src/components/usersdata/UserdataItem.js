import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ userdata: { text, year, policestation, _id } }) => (
  <Fragment>
    <tr>
      <td>{year}</td>
      <td>{text}</td>
      <td>{policestation}</td>
      <td>{text}</td>
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
