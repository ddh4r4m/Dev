import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './table.css';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   leftIcon: {
//     marginRight: theme.spacing(1)
//   },
//   rightIcon: {
//     marginLeft: theme.spacing(1)
//   },
//   iconSmall: {
//     fontSize: 20
//   }
// }));

const ProfileItem = ({
  deouserdata: {
    text,
    year,
    policestation,
    _id,
    natureofcrime,
    firno,
    dateofcrime,
    typeofatrocity,
    ipcapplied,
    sectionsapplied,
    othersections
  }
}) => {
  const tatro = JSON.parse(typeofatrocity);
  const ipcsapp = JSON.parse(ipcapplied);
  const sectapp = JSON.parse(sectionsapplied);
  return (
    <Fragment>
      <tr>
        <td>{text}</td>
        <td>{year}</td>
        <td>{policestation}</td>
        <td>{dateofcrime}</td>
        <td>{firno}</td>

        <td style={{ textAlign: 'left' }}>
          {tatro !== null
            ? tatro.map((tatr, i) => {
                return <li key={i}>{tatr.value}</li>;
              })
            : ''}
        </td>
        <td>
          {ipcsapp !== null
            ? ipcsapp.map((ipcs, i) => {
                return <li key={i}>{ipcs.value}</li>;
              })
            : ''}
        </td>
        <td>
          {sectapp !== null
            ? sectapp.map((sections, i) => {
                return <li key={i}>{sections.value}</li>;
              })
            : ''}
        </td>
        <td>{othersections}</td>
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
};

ProfileItem.propTypes = {
  deouserdata: PropTypes.object.isRequired
};

export default ProfileItem;
