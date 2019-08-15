import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../usersdata/table.css';
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
  userdata: {
    text,
    regdateofcrime,
    policestation,
    _id,
    natureofcrime,
    firno,
    victimdetails,
    typeofatrocity,
    ipcapplied,
    sectionsapplied,
    othersections,
    commentsdci
  }
}) => {
  const tatro = JSON.parse(typeofatrocity);
  const ipcsapp = JSON.parse(ipcapplied);
  const sectapp = JSON.parse(sectionsapplied);
  const victim = JSON.parse(victimdetails);

  const date = new Date();
  const date2 = new Date(date - 43200000);
  var commenti = null;

  if (commentsdci.length !== 0) {
    console.log(Date('Userssdata Date', commentsdci[0].date));
    console.log(Date(commentsdci[0].date) >= Date(date2));
    const date3 = new Date(commentsdci[0].date);
    const date4 = new Date(date2);
    const tvalue1 = date3 > date4;
    if (tvalue1) {
      //   return tvalue1;
      commenti = commentsdci[0].text;
    }
    //return Date(usersdata.commentsdci[0].date) >= Date(date2);
  }
  return (
    <Fragment>
      <tr>
        <td>{text}</td>
        <td>{regdateofcrime}</td>
        <td>{policestation}</td>
        <td>{firno}</td>
        <td>
          {victim.map((vdetail, i) => {
            return <li key={i}>{vdetail.name}</li>;
          })}
        </td>
        <td>{natureofcrime}</td>
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
        <td>{commenti}</td>
        {/* <td>
          <Link to={`/userdata/${_id}`}>
            <Button variant='contained' color='primary'>
              View CASE
            </Button>
          </Link>
        </td> */}
      </tr>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  userdata: PropTypes.object.isRequired
};

export default ProfileItem;
