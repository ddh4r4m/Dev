import React from 'react';
import { Link } from 'react-router-dom';
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

const DashboardActions = () => {
  const classes = useStyles();

  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-user-circle text-primary' /> Edit Profile
        </Button>
      </Link>
      <Link to='/create-userdata'>
        <Button variant='contained' className={classes.button}>
          <i className='fab fa-black-tie text-primary' /> ADD CASE
        </Button>
      </Link>
      <Link to='/usersdata'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> EDIT/VIEW CASE
        </Button>
      </Link>
      <br />
      <Link to='/usersdatastone'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> NO ACTION : 60
          Days POLICE
        </Button>
      </Link>
      {/* <Link to='/usersdatasttwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES :
          60 Days POLICE
        </Button>
      </Link> */}
      <br />
      <Link to='/usersdatapcone'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES I:
          Asst. Comm.
        </Button>
      </Link>
      <Link to='/usersdatapctwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES II:
          Asst. Comm.
        </Button>
      </Link>
      <br />
      <Link to='/usersdatappone'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES I:
          60 Days POLICE
        </Button>
      </Link>
      <Link to='/usersdatapptwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES II:
          60 Days POLICE
        </Button>
      </Link>
      <br />
      <Link to='/usersdatappthree'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES
          III: 60 Days POLICE
        </Button>
      </Link>
      <br />
      <Link to='/createpdf'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PRINT MINUTES OF
          MEETING
        </Button>
      </Link>
      <br />
      <Link to='/references'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> REFERENCES
        </Button>
      </Link>
    </div>
  );
};

export default DashboardActions;
