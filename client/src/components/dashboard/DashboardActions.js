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

export const DashboardActions = () => {
  const classes = useStyles();

  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-user-circle text-primary' /> Edit Profile
        </Button>
      </Link>
      <Link to='/returned'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> Returned Cases
        </Button>
      </Link>
      <Link to='/usersdatasttwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> Advanced Search :
          Cases
        </Button>
      </Link>
      {/* <Link to='/usersdatasttwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES :
          60 Days POLICE
        </Button>
      </Link> */}
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
      <Link to='/usersdatappthree'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES
          III: 1 year POLICE
        </Button>
      </Link>
      <br />
      <Link to='/usersdatapcone'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES I:
          7 days Asst. Comm.
        </Button>
      </Link>
      <Link to='/usersdatapctwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES II:
          7 days Asst. Comm.
        </Button>
      </Link>
      <Link to='/usersdatapcthree'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES
          III: 7 days Asst. Comm.
        </Button>
      </Link>
      <br />
      <Link to='/usersdatadcone'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES I:
          District Collector
        </Button>
      </Link>
      <Link to='/usersdatadctwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES II:
          District Collector
        </Button>
      </Link>
      <Link to='/usersdatadcthree'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES
          III: District Collector
        </Button>
      </Link>
      <br />
      <Link to='/createpdf'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PRINT MINUTES OF
          MEETING
        </Button>
      </Link>
      <Link to='/mofmeetings'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' />
          Upload Minutes of Meeting
        </Button>
      </Link>
    </div>
  );
};

//Asst. Commisioner
export const DashboardActionss = () => {
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
      <Link to='/deousersdata'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> APPROVE CASE
        </Button>
      </Link>

      <Link to='/returned'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> Returned Cases
        </Button>
      </Link>
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
      <br />
      <Link to='/mofmeetings'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> Minutes of
          Meeting
        </Button>
      </Link>
    </div>
  );
};

//POlice
export const DashboardActionse = () => {
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
      <Link to='/returned'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> Returned Cases
        </Button>
      </Link>
      {/* <Link to='/usersdatasttwo'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> PENDING CASES :
          60 Days POLICE
        </Button>
      </Link> */}
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
          III: 1 Year POLICE
        </Button>
      </Link>

      <br />
      <Link to='/references'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> REFERENCES
        </Button>
      </Link>
      <br />
    </div>
  );
};

//Data Entry OPerator
export const DashboardActionsee = () => {
  const classes = useStyles();

  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-user-circle text-primary' /> Edit Profile
        </Button>
      </Link>
      <Link to='/create-deouserdata'>
        <Button variant='contained' className={classes.button}>
          <i className='fab fa-black-tie text-primary' /> ADD CASE
        </Button>
      </Link>
      <Link to='/deousersdata'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> EDIT/VIEW CASE
        </Button>
      </Link>
      <br />
      <Link to='/references'>
        <Button variant='contained' className={classes.button}>
          <i className='fas fa-graduation-cap text-primary' /> REFERENCES
        </Button>
      </Link>
      <br />
    </div>
  );
};
