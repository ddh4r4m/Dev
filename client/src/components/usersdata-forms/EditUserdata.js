import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { editUserdata, getUserdataById } from '../../actions/userdata';
import Select from 'react-select';
import { ipcOptions, sectionsopts, options } from './ipcdata';
import makeAnimated from 'react-select/animated';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  rooot: {
    padding: theme.spacing(5, 6)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const EditUserdataById = ({
  match,
  userdata: { userdata, loading },
  editUserdata,
  getUserdataById,
  history,
  auth: { user }
}) => {
  const [formData, setFormData] = useState({
    text: '',
    year: '',
    policestation: '',
    crimeregisterno: '',
    dateofcrime: '',
    regdateofcrime: '',
    victimdetails: '',
    natureofcrime: '',
    firstbenefitbypolice: 'pending',
    firstbenefitbycommis: 'pending',
    firstbenefitbycollector: 'pending',
    firstbenefitbypolicedate: '',
    firstbenefitbycommisdate: '',
    firstbenefitbycollectordate: '',
    firstbenefitbypolicecomment: '',
    firstbenefitbycommcomment: '',
    firstbenefitbycollectorcomment: '',
    secondbenefitbypolice: 'pending',
    secondbenefitbycommis: 'pending',
    secondbenefitbycollector: 'pending',
    secondbenefitbypolicedate: '',
    secondbenefitbycommisdate: '',
    secondbenefitbycollectordate: '',
    secondbenefitbypolicecomment: '',
    secondbenefitbycommcomment: '',
    secondbenefitbycollectorcomment: '',
    thirdbenefitbypolice: 'pending',
    thirdbenefitbycommis: 'pending',
    thirdbenefitbycollector: 'pending',
    thirdbenefitbypolicedate: '',
    thirdbenefitbycommisdate: '',
    thirdbenefitbycollectordate: '',
    thirdbenefitbypolicecomment: '',
    thirdbenefitbycommcomment: '',
    thirdbenefitbycollectorcomment: '',
    sections: '',
    chargesheetdate: '',
    policeinvestigation: '',
    courtresults: '',
    financialsupport: '',
    dateofcourtorder: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    disabledata: false,
    closecase: '',
    docImage: '',
    doccImage: '',
    postmortem: '',
    victimone: '',
    victimtwo: '',
    victimthree: '',
    victimfour: '',
    victimfive: '',
    accusedone: '',
    accusedtwo: '',
    accusedthree: '',
    accusedfour: '',
    accusedfive: ''
  });
  const [typeofatrocity, setTypeofatrocity] = useState(null);
  const [ipcapplied, setIpc] = useState(null);
  const [sectionsapplied, setSections] = useState(null);
  var [closethecase, toggleclossecase] = useState(false);

  var formDataa = new FormData();
  const classes = useStyles();

  const animatedComponents = makeAnimated();
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [displayVictim, toggledisplayVictim] = useState(false);
  const [displayAccused, toggledisplayAccused] = useState(false);

  useEffect(() => {
    getUserdataById(match.params.id);

    setFormData({
      text: loading || !userdata.text ? '' : userdata.text,
      year: loading || !userdata.year ? '' : userdata.year,
      policestation:
        loading || !userdata.policestation ? '' : userdata.policestation,
      crimeregisterno:
        loading || !userdata.crimeregisterno ? '' : userdata.crimeregisterno,
      dateofcrime: loading || !userdata.dateofcrime ? '' : userdata.dateofcrime,
      regdateofcrime:
        loading || !userdata.regdateofcrime ? '' : userdata.regdateofcrime,
      victimdetails:
        loading || !userdata.victimdetails ? '' : userdata.victimdetails,
      firstbenefitbypolice:
        loading || !userdata.firstbenefitbypolice
          ? 'pending'
          : userdata.firstbenefitbypolice,
      firstbenefitbycommis:
        loading || !userdata.firstbenefitbycommis
          ? 'pending'
          : userdata.firstbenefitbycommis,
      firstbenefitbycollector:
        loading || !userdata.firstbenefitbycollector
          ? 'pending'
          : userdata.firstbenefitbycollector,
      firstbenefitbypolicedate:
        loading || !userdata.firstbenefitbypolicedate
          ? ''
          : userdata.firstbenefitbypolicedate,
      firstbenefitbycommisdate:
        loading || !userdata.firstbenefitbycommisdate
          ? ''
          : userdata.firstbenefitbycommisdate,
      firstbenefitbycollectordate:
        loading || !userdata.firstbenefitbycollectordate
          ? ''
          : userdata.firstbenefitbycollectordate,
      firstbenefitbypolicecomment:
        loading || !userdata.firstbenefitbypolicecomment
          ? ''
          : userdata.firstbenefitbypolicecomment,
      firstbenefitbycommcomment:
        loading || !userdata.firstbenefitbycommcomment
          ? ''
          : userdata.firstbenefitbycommcomment,
      firstbenefitbycollectorcomment:
        loading || !userdata.firstbenefitbycollectorcomment
          ? ''
          : userdata.firstbenefitbycollectorcomment,
      secondbenefitbypolice:
        loading || !userdata.secondbenefitbypolice
          ? 'pending'
          : userdata.secondbenefitbypolice,
      secondbenefitbycommis:
        loading || !userdata.secondbenefitbycommis
          ? 'pending'
          : userdata.secondbenefitbycommis,
      secondbenefitbycollector:
        loading || !userdata.secondbenefitbycollector
          ? 'pending'
          : userdata.secondbenefitbycollector,
      secondbenefitbypolicedate:
        loading || !userdata.secondbenefitbypolicedate
          ? ''
          : userdata.secondbenefitbypolicedate,
      secondbenefitbycommisdate:
        loading || !userdata.secondbenefitbycommisdate
          ? ''
          : userdata.secondbenefitbycommisdate,
      secondbenefitbycollectordate:
        loading || !userdata.secondbenefitbycollectordate
          ? ''
          : userdata.secondbenefitbycollectordate,
      secondbenefitbypolicecomment:
        loading || !userdata.secondbenefitbypolicecomment
          ? ''
          : userdata.secondbenefitbypolicecomment,
      secondbenefitbycommcomment:
        loading || !userdata.secondbenefitbycommcomment
          ? ''
          : userdata.secondbenefitbycommcomment,
      secondbenefitbycollectorcomment:
        loading || !userdata.secondbenefitbycollectorcomment
          ? ''
          : userdata.secondbenefitbycollectorcomment,
      thirdbenefitbypolice:
        loading || !userdata.thirdbenefitbypolice
          ? 'pending'
          : userdata.thirdbenefitbypolice,
      thirdbenefitbycommis:
        loading || !userdata.thirdbenefitbycommis
          ? 'pending'
          : userdata.thirdbenefitbycommis,
      thirdbenefitbycollector:
        loading || !userdata.thirdbenefitbycollector
          ? 'pending'
          : userdata.thirdbenefitbycollector,
      thirdbenefitbypolicedate:
        loading || !userdata.thirdbenefitbypolicedate
          ? ''
          : userdata.thirdbenefitbypolicedate,
      thirdbenefitbycommisdate:
        loading || !userdata.thirdbenefitbycommisdate
          ? ''
          : userdata.thirdbenefitbycommisdate,
      thirdbenefitbycollectordate:
        loading || !userdata.thirdbenefitbycollectordate
          ? ''
          : userdata.thirdbenefitbycollectordate,
      thirdbenefitbypolicecomment:
        loading || !userdata.thirdbenefitbypolicecomment
          ? ''
          : userdata.thirdbenefitbypolicecomment,
      thirdbenefitbycommcomment:
        loading || !userdata.thirdbenefitbycommcomment
          ? ''
          : userdata.thirdbenefitbycommcomment,
      thirdbenefitbycollectorcomment:
        loading || !userdata.thirdbenefitbycollectorcomment
          ? ''
          : userdata.thirdbenefitbycollectorcomment,
      natureofcrime:
        loading || !userdata.natureofcrime ? '' : userdata.natureofcrime,
      sections: loading || !userdata.sections ? '' : userdata.sections,
      chargesheetdate:
        loading || !userdata.chargesheetdate ? '' : userdata.chargesheetdate,
      dateofcourtorder:
        loading || !userdata.dateofcourtorder ? '' : userdata.dateofcourtorder,
      policeinvestigation:
        loading || !userdata.policeinvestigation
          ? ''
          : userdata.policeinvestigation,
      courtresults:
        loading || !userdata.courtresults ? '' : userdata.courtresults,
      financialsupport:
        loading || !userdata.financialsupport ? '' : userdata.financialsupport,
      twitter: loading || !userdata.twitter ? '' : userdata.twitter,
      facebook: loading || !userdata.facebook ? '' : userdata.facebook,
      linkedin: loading || !userdata.linkedin ? '' : userdata.linkedin,
      youtube: loading || !userdata.youtube ? '' : userdata.youtube,
      instagram: loading || !userdata.instagram ? '' : userdata.instagram,
      disabledata:
        loading || !userdata.disabledata ? false : userdata.disabledata,
      closecase: loading || !userdata.closecase ? '' : userdata.closecase,

      docImage: loading || !userdata.docImage ? '' : userdata.docImage,
      doccImage: loading || !userdata.doccImage ? '' : userdata.doccImage,
      postmortem: loading || !userdata.postmortem ? '' : userdata.postmortem,
      victimone: loading || !userdata.victimone ? '' : userdata.victimone,
      victimtwo: loading || !userdata.victimtwo ? '' : userdata.victimtwo,
      victimthree: loading || !userdata.victimthree ? '' : userdata.victimthree,
      victimfour: loading || !userdata.victimfour ? '' : userdata.victimfour,
      victimfive: loading || !userdata.victimfive ? '' : userdata.victimfive,
      accusedone: loading || !userdata.accusedone ? '' : userdata.accusedone,
      accusedtwo: loading || !userdata.accusedtwo ? '' : userdata.accusedtwo,
      accusedthree:
        loading || !userdata.accusedthree ? '' : userdata.accusedthree,
      accusedfour: loading || !userdata.accusedfour ? '' : userdata.accusedfour,
      accusedfive: loading || !userdata.accusedfive ? '' : userdata.accusedfive
      // closethecase:
      //   loading || !userdata.closethecase ? false : userdata.closethecase
      //   text: 'Helo'
    });
    setTypeofatrocity(
      loading || !userdata.typeofatrocity
        ? null
        : JSON.parse(userdata.typeofatrocity)
    );
    setIpc(
      loading || !userdata.ipcapplied ? null : JSON.parse(userdata.ipcapplied)
    );
    setSections(
      loading || !userdata.sectionsapplied
        ? null
        : JSON.parse(userdata.sectionsapplied)
    );
    toggleclossecase(
      loading || !userdata.closethecase ? false : userdata.closethecase
    );
  }, [loading, getUserdataById, match]);

  const handleChange = typeofatrocity => {
    setTypeofatrocity(typeofatrocity);
  };
  const handleIpc = ipcapplied => {
    setIpc(ipcapplied);
  };
  const handleSections = sectionsapplied => {
    setSections(sectionsapplied);
  };

  const {
    text,
    year,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    victimdetails,
    natureofcrime,
    sections,
    chargesheetdate,
    firstbenefitbypolice,
    firstbenefitbycommis,
    firstbenefitbycollector,
    firstbenefitbypolicedate,
    firstbenefitbycommisdate,
    firstbenefitbycollectordate,
    firstbenefitbypolicecomment,
    firstbenefitbycommcomment,
    firstbenefitbycollectorcomment,
    secondbenefitbypolice,
    secondbenefitbycommis,
    secondbenefitbycollector,
    secondbenefitbypolicedate,
    secondbenefitbycommisdate,
    secondbenefitbycollectordate,
    secondbenefitbypolicecomment,
    secondbenefitbycommcomment,
    secondbenefitbycollectorcomment,
    thirdbenefitbypolice,
    thirdbenefitbycommis,
    thirdbenefitbycollector,
    thirdbenefitbypolicedate,
    thirdbenefitbycommisdate,
    thirdbenefitbycollectordate,
    thirdbenefitbypolicecomment,
    thirdbenefitbycommcomment,
    thirdbenefitbycollectorcomment,
    policeinvestigation,
    courtresults,
    financialsupport,
    dateofcourtorder,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    disabledata,
    closecase,
    docImage,
    doccImage,
    postmortem,
    victimone,
    victimtwo,
    victimthree,
    victimfour,
    victimfive,
    accusedone,
    accusedtwo,
    accusedthree,
    accusedfour,
    accusedfive
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    formDataa.append('typeofatrocity', JSON.stringify(typeofatrocity));
    formDataa.append('ipcapplied', JSON.stringify(ipcapplied));
    formDataa.append('sectionsapplied', JSON.stringify(sectionsapplied));
    formDataa.append('text', formData.text);
    formDataa.append('year', year);
    formDataa.append('policestation', policestation);
    formDataa.append('crimeregisterno', crimeregisterno);
    formDataa.append('dateofcrime', dateofcrime);
    formDataa.append('regdateofcrime', regdateofcrime);
    formDataa.append('victimdetails', victimdetails);
    formDataa.append('natureofcrime', natureofcrime);
    formDataa.append('firstbenefitbypolice', firstbenefitbypolice);
    if (firstbenefitbypolice !== 'pending' && firstbenefitbypolicedate === '') {
      const date = new Date();
      formDataa.append('firstbenefitbypolicedate', date);
    } else {
      formDataa.append('firstbenefitbypolicedate', firstbenefitbypolicedate);
    }
    if (firstbenefitbycommis !== 'pending' && firstbenefitbycommisdate === '') {
      const date = new Date();
      formDataa.append('firstbenefitbycommisdate', date);
    } else {
      formDataa.append('firstbenefitbycommisdate', firstbenefitbycommisdate);
    }
    if (
      firstbenefitbycollector !== 'pending' &&
      firstbenefitbycollectordate === ''
    ) {
      const date = new Date();
      formDataa.append('firstbenefitbycollectordate', date);
    } else {
      formDataa.append(
        'firstbenefitbycollectordate',
        firstbenefitbycollectordate
      );
    }
    formDataa.append('firstbenefitbycommis', firstbenefitbycommis);
    formDataa.append('firstbenefitbycollector', firstbenefitbycollector);
    formDataa.append(
      'firstbenefitbypolicecomment',
      firstbenefitbypolicecomment
    );
    formDataa.append('firstbenefitbycommcomment', firstbenefitbycommcomment);
    formDataa.append(
      'firstbenefitbycollectorcomment',
      firstbenefitbycollectorcomment
    );
    formDataa.append('secondbenefitbypolice', secondbenefitbypolice);
    if (
      secondbenefitbypolice !== 'pending' &&
      secondbenefitbypolicedate === ''
    ) {
      const date = new Date();
      formDataa.append('secondbenefitbypolicedate', date);
    } else {
      formDataa.append('secondbenefitbypolicedate', secondbenefitbypolicedate);
    }
    if (
      secondbenefitbycommis !== 'pending' &&
      secondbenefitbycommisdate === ''
    ) {
      const date = new Date();
      formDataa.append('secondbenefitbycommisdate', date);
    } else {
      formDataa.append('secondbenefitbycommisdate', secondbenefitbycommisdate);
    }
    if (
      secondbenefitbycollector !== 'pending' &&
      secondbenefitbycollectordate === ''
    ) {
      const date = new Date();
      formDataa.append('secondbenefitbycollectordate', date);
    } else {
      formDataa.append(
        'secondbenefitbycollectordate',
        secondbenefitbycollectordate
      );
    }
    formDataa.append('secondbenefitbycommis', secondbenefitbycommis);
    formDataa.append('secondbenefitbycollector', secondbenefitbycollector);
    formDataa.append(
      'secondbenefitbypolicecomment',
      secondbenefitbypolicecomment
    );
    formDataa.append('secondbenefitbycommcomment', secondbenefitbycommcomment);
    formDataa.append(
      'secondbenefitbycollectorcomment',
      secondbenefitbycollectorcomment
    );
    formDataa.append('thirdbenefitbypolice', thirdbenefitbypolice);
    formDataa.append('thirdbenefitbycommis', thirdbenefitbycommis);
    formDataa.append('thirdbenefitbycollector', thirdbenefitbycollector);
    formDataa.append(
      'thirdbenefitbypolicecomment',
      thirdbenefitbypolicecomment
    );
    formDataa.append('thirdbenefitbycommcomment', thirdbenefitbycommcomment);
    formDataa.append(
      'thirdbenefitbycollectorcomment',
      thirdbenefitbycollectorcomment
    );
    if (thirdbenefitbypolice !== 'pending' && thirdbenefitbypolicedate === '') {
      const date = new Date();
      formDataa.append('thirdbenefitbypolicedate', date);
    } else {
      formDataa.append('thirdbenefitbypolicedate', thirdbenefitbypolicedate);
    }
    if (thirdbenefitbycommis !== 'pending' && thirdbenefitbycommisdate === '') {
      const date = new Date();
      formDataa.append('thirdbenefitbycommisdate', date);
    } else {
      formDataa.append('thirdbenefitbycommisdate', thirdbenefitbycommisdate);
    }
    if (
      thirdbenefitbycollector !== 'pending' &&
      thirdbenefitbycollectordate === ''
    ) {
      const date = new Date();
      formDataa.append('thirdbenefitbycollectordate', date);
    } else {
      formDataa.append(
        'thirdbenefitbycollectordate',
        thirdbenefitbycollectordate
      );
    }
    formDataa.append('sections', sections);
    formDataa.append('chargesheetdate', chargesheetdate);
    formDataa.append('policeinvestigation', policeinvestigation);
    formDataa.append('dateofcourtorder', dateofcourtorder);
    formDataa.append('courtresults', courtresults);
    formDataa.append('financialsupport', financialsupport);
    formDataa.append('twitter', twitter);
    formDataa.append('facebook', facebook);
    formDataa.append('linkedin', linkedin);
    formDataa.append('youtube', youtube);
    formDataa.append('instagram', instagram);
    formDataa.append('disabledata', disabledata);
    if (closecase === 'yes') {
      toggleclossecase((closethecase = true));
      // console.log('closethecase', closethecase);
    }
    formDataa.append('closecase', closecase);
    formDataa.append('closethecase', closethecase);
    formDataa.append('docImage', docImage);
    formDataa.append('doccImage', doccImage);
    formDataa.append('postmortem', postmortem);
    formDataa.append('victimone', victimone);
    formDataa.append('victimtwo', victimtwo);
    formDataa.append('victimthree', victimthree);
    formDataa.append('victimfour', victimfour);
    formDataa.append('victimfive', victimfive);
    formDataa.append('accusedone', accusedone);
    formDataa.append('accusedtwo', accusedtwo);
    formDataa.append('accusedthree', accusedthree);
    formDataa.append('accusedfour', accusedfour);
    formDataa.append('accusedfive', accusedfive);
    editUserdata(match.params.id, formDataa, history);
    for (const value of formDataa.values()) {
      console.log(value);
    }
  };

  return (
    <Fragment>
      {userdata === null || loading ? (
        <Spinner />
      ) : userdata === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='createuserbg'>
            <div style={{ margin: '10% 10%' }}>
              <Paper className={classes.rooot}>
                <h1 className='large text-primary'>Add New FIR</h1>
                <p className='lead'>
                  <i className='fas fa-user' /> Let's add some information to
                  FIR
                </p>
                <small>* = required field</small>
                <form
                  className='form'
                  onSubmit={e => onSubmit(e)}
                  encType='multipart/form-data'
                  method='POST'
                >
                  <div className='form-group'>
                    Serial No.
                    <input
                      type='text'
                      placeholder='Serial No.'
                      name='text'
                      value={text}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                    <small className='form-text'>
                      Could be the defined format of serial no
                    </small>
                  </div>
                  <div className='form-group'>
                    Year of Crime
                    <input
                      type='date'
                      placeholder='Year of Crime'
                      name='year'
                      value={year}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Name of Police Station
                    <select
                      name='policestation'
                      value={policestation}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    >
                      <option value='Dhule City'>Dhule City </option>
                      <option value='Aazadnagar'>Aazadnagar</option>
                      <option value='Chalisgaon Road'>Chalisgaon Road</option>
                      <option value='Mohadi Upnagar'>Mohadi Upnagar</option>
                      <option value='Deopur Police Station'>
                        Deopur Police Station
                      </option>
                      <option value='West Deopur'>West Deopur</option>
                      <option value='Dhule Taluka'>Dhule Taluka</option>
                      <option value='Songir'>Songir</option>
                      <option value='Sakri'>Sakri</option>
                      <option value='Pimplner'>Pimplner</option>
                      <option value='Nijampur'>Nijampur</option>
                      <option value='Shindkheda'>Shindkheda</option>
                      <option value='Nardana'>Nardana</option>
                      <option value='Dondaicha'>Dondaicha</option>
                      <option value='Shirpur Taluka'>Shirpur Taluka</option>
                      <option value='Shirpur City'>Shirpur City</option>
                      <option value='Thalner'>Thalner</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    Register No.
                    <input
                      type='text'
                      placeholder='Register No.'
                      name='crimeregisterno'
                      value={crimeregisterno}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Date When Crime Happened
                    <input
                      type='date'
                      placeholder='Date When Crime Happened'
                      name='dateofcrime'
                      value={dateofcrime}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Date when FIR was Registered
                    <input
                      type='date'
                      placeholder='Date when FIR was Registered'
                      name='regdateofcrime'
                      value={regdateofcrime}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Details of Victim
                    <input
                      type='text'
                      placeholder='Details of Victim'
                      name='victimdetails'
                      value={victimdetails}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Summary of Crime
                    <textarea
                      rows='4'
                      cols='2'
                      type='text'
                      placeholder='Summary of Crime'
                      name='natureofcrime'
                      value={natureofcrime}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Type of Crime
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={options}
                      name='typeofatrocity'
                      value={typeofatrocity}
                      isMulti
                      isSearchable
                      onChange={handleChange}
                      isDisabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Select IPC
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={ipcOptions}
                      name='ipcapplied'
                      value={ipcapplied}
                      isMulti
                      isSearchable
                      onChange={handleIpc}
                      isDisabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Select Sections
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={sectionsopts}
                      name='sectionsapplied'
                      value={sectionsapplied}
                      isMulti
                      isSearchable
                      onChange={handleSections}
                      isDisabled={user && user.name !== 'Police'}
                    />
                  </div>

                  <div className='my-2'>
                    <Button
                      onClick={() => toggledisplayVictim(!displayVictim)}
                      type='button'
                      variant='contained'
                      className={classes.button}
                    >
                      Add Victim's Caste Certificate
                    </Button>
                    <span>If you want to change the uploaded files</span>
                  </div>
                  {displayVictim && (
                    <Fragment>
                      <h3>Add Victim's Details</h3>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload first Victim's Caste Certificate File <br />
                          <input
                            type='file'
                            name='victimone'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimone: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload Second Victim's Caste Certificate File <br />
                          <input
                            type='file'
                            name='victimtwo'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimtwo: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload third Victim's Caste Certificate File <br />
                          <input
                            type='file'
                            name='victimthree'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimthree: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload fourth Victim's Caste Certificate File <br />
                          <input
                            type='file'
                            name='victimfour'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimfour: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload fifth Victim's Caste Certificate File <br />
                          <input
                            type='file'
                            name='victimfive'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimfive: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                    </Fragment>
                  )}

                  <div className='my-2'>
                    <Button
                      onClick={() => toggledisplayAccused(!displayAccused)}
                      type='button'
                      variant='contained'
                      className={classes.button}
                    >
                      Add Accused Person's Caste Certificate
                    </Button>
                    <span>If you want to change the uploaded files</span>
                  </div>

                  {displayAccused && (
                    <Fragment>
                      <h3>Add Accused Person's Details</h3>

                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload first Accused Person's Caste Certificate File{' '}
                          <br />
                          <input
                            type='file'
                            name='accusedone'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedone: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload Second Accused Person's Caste Certificate File{' '}
                          <br />
                          <input
                            type='file'
                            name='accusedtwo'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedtwo: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload third Accused Person's Caste Certificate File{' '}
                          <br />
                          <input
                            type='file'
                            name='accusedthree'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedthree: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload fourth Accused Person's Caste Certificate File{' '}
                          <br />
                          <input
                            type='file'
                            name='accusedfour'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedfour: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload fifth Accused Person's Caste Certificate File{' '}
                          <br />
                          <input
                            type='file'
                            name='accusedfive'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedfive: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                    </Fragment>
                  )}

                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload FIR File{' '}
                      <input
                        type='file'
                        name='docImage'
                        onChange={e => {
                          const vall = e.target.files[0];
                          setFormData(prevState => {
                            return { ...prevState, docImage: vall };
                          });
                        }}
                      />
                    </Paper>
                  </div>

                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload A/B/C Summary File{' '}
                      <input
                        type='file'
                        name='abcSummary'
                        onChange={e => {
                          const vall = e.target.files[0];
                          setFormData(prevState => {
                            return { ...prevState, abcSummary: vall };
                          });
                        }}
                      />
                    </Paper>
                  </div>
                  <div className='form-group'>
                    Details from Police Investigation
                    <textarea
                      type='text'
                      rows='4'
                      placeholder='Details from Police Investigation'
                      name='policeinvestigation'
                      value={policeinvestigation}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Comment on First benefit Recommendation by Police
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='firstbenefitbypolicecomment'
                      value={firstbenefitbypolicecomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    First Benefit Recommendation by Police
                    <Radio
                      type='radio'
                      name='firstbenefitbypolice'
                      checked={firstbenefitbypolice === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='firstbenefitbypolice'
                      checked={firstbenefitbypolice === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='firstbenefitbypolice'
                      checked={firstbenefitbypolice === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    Pending
                  </div>
                  <div className='form-group'>
                    Comment on First benefit Recommendation by Asst. Commisioner
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='firstbenefitbycommcomment'
                      value={firstbenefitbycommcomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />
                  </div>
                  <div className='form-group'>
                    First Benefit Recommendation by Assistant Commisioner
                    <Radio
                      type='radio'
                      name='firstbenefitbycommis'
                      checked={firstbenefitbycommis === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='firstbenefitbycommis'
                      checked={firstbenefitbycommis === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='firstbenefitbycommis'
                      checked={firstbenefitbycommis === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    Pending
                  </div>
                  <div className='form-group'>
                    Comment on First benefit Decision by District Collector
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='firstbenefitbycollectorcomment'
                      value={firstbenefitbycollectorcomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />
                  </div>
                  <div className='form-group'>
                    Decision for distribution of first Benefit District
                    Collector
                    <Radio
                      type='radio'
                      name='firstbenefitbycollector'
                      checked={firstbenefitbycollector === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='firstbenefitbycollector'
                      checked={firstbenefitbycollector === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='firstbenefitbycollector'
                      checked={firstbenefitbycollector === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    Pending
                  </div>

                  <div className='form-group'>
                    Applicable Penal Codes
                    <input
                      type='text'
                      placeholder='Penal Codes Applicable'
                      name='sections'
                      value={sections}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload PostMortem File{' '}
                      <input
                        type='file'
                        name='postmortem'
                        onChange={e => {
                          const vall = e.target.files[0];
                          setFormData(prevState => {
                            return { ...prevState, postmortem: vall };
                          });
                        }}
                      />
                    </Paper>
                  </div>
                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload Medical Report File{' '}
                      <input
                        type='file'
                        name='medicalreport'
                        onChange={e => {
                          const vall = e.target.files[0];
                          setFormData(prevState => {
                            return { ...prevState, medicalreport: vall };
                          });
                        }}
                      />
                    </Paper>
                  </div>
                  <div className='form-group'>
                    Date When Chargesheet was filed in the court
                    <input
                      type='date'
                      placeholder='Date When Chargesheet was filed in the court'
                      name='chargesheetdate'
                      value={chargesheetdate}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload ChargeSheet File{' '}
                      <input
                        type='file'
                        name='doccImage'
                        onChange={e => {
                          const vall = e.target.files[0];
                          setFormData(prevState => {
                            return { ...prevState, doccImage: vall };
                          });
                        }}
                      />
                    </Paper>
                  </div>
                  <div className='form-group'>
                    Comment on Second benefit Recommendation by Police
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='secondbenefitbypolicecomment'
                      value={secondbenefitbypolicecomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Second Benefit Recommendation by Police
                    <Radio
                      type='radio'
                      name='secondbenefitbypolice'
                      checked={secondbenefitbypolice === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='secondbenefitbypolice'
                      checked={secondbenefitbypolice === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='secondbenefitbypolice'
                      checked={secondbenefitbypolice === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    Pending
                  </div>
                  <div className='form-group'>
                    Comment on Second benefit Recommendation by Asst.
                    Commisioner
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='secondbenefitbycommcomment'
                      value={secondbenefitbycommcomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />
                  </div>
                  <div className='form-group'>
                    Second Benefit Recommendation by Assistant Commisioner
                    <Radio
                      type='radio'
                      name='secondbenefitbycommis'
                      checked={secondbenefitbycommis === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='secondbenefitbycommis'
                      checked={secondbenefitbycommis === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='secondbenefitbycommis'
                      checked={secondbenefitbycommis === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    Pending
                  </div>
                  <div className='form-group'>
                    Comment on Second benefit Decision by District Collector
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='secondbenefitbycollectorcomment'
                      value={secondbenefitbycollectorcomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />
                  </div>
                  <div className='form-group'>
                    Decision for distribution of second Benefit District
                    Collector
                    <Radio
                      type='radio'
                      name='secondbenefitbycollector'
                      checked={secondbenefitbycollector === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='secondbenefitbycollector'
                      checked={secondbenefitbycollector === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='secondbenefitbycollector'
                      checked={secondbenefitbycollector === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    Pending
                  </div>

                  <div className='form-group'>
                    Date of Court Order
                    <input
                      type='date'
                      placeholder='Date of Court Order'
                      name='dateofcourtorder'
                      value={dateofcourtorder}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Summary of Court Order
                    <textarea
                      rows='4'
                      type='text'
                      placeholder='Court Results'
                      name='courtresults'
                      value={courtresults}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Comment on Third benefit Recommendation by Police
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='thirdbenefitbypolicecomment'
                      value={thirdbenefitbypolicecomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Third Benefit Recommendation by Police
                    <Radio
                      type='radio'
                      name='thirdbenefitbypolice'
                      checked={thirdbenefitbypolice === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='thirdbenefitbypolice'
                      checked={thirdbenefitbypolice === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='thirdbenefitbypolice'
                      checked={thirdbenefitbypolice === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Police'}
                    />{' '}
                    Pending
                  </div>
                  <div className='form-group'>
                    Comment on Third benefit Recommendation by Asst. Commisioner
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='thirdbenefitbycommcomment'
                      value={thirdbenefitbycommcomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />
                  </div>
                  <div className='form-group'>
                    Third Benefit Recommendation by Assistant Commisioner
                    <Radio
                      type='radio'
                      name='thirdbenefitbycommis'
                      checked={thirdbenefitbycommis === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='thirdbenefitbycommis'
                      checked={thirdbenefitbycommis === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='thirdbenefitbycommis'
                      checked={thirdbenefitbycommis === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'Asst. Commissioner'}
                    />{' '}
                    Pending
                  </div>
                  <div className='form-group'>
                    Comment on Third benefit Decision by District Collector
                    <input
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='thirdbenefitbycollectorcomment'
                      value={thirdbenefitbycollectorcomment}
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />
                  </div>
                  <div className='form-group'>
                    Decision for distribution of third Benefit District
                    Collector
                    <Radio
                      type='radio'
                      name='thirdbenefitbycollector'
                      checked={thirdbenefitbycollector === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='thirdbenefitbycollector'
                      checked={thirdbenefitbycollector === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='thirdbenefitbycollector'
                      checked={thirdbenefitbycollector === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={user && user.name !== 'District Collector'}
                    />{' '}
                    Pending
                  </div>

                  <div className='form-group'>
                    Financial Support to be Provided
                    <textarea
                      rows='4'
                      type='text'
                      placeholder='Financial Support to be Provided'
                      name='financialsupport'
                      value={financialsupport}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  {!disabledata && (
                    <Fragment>
                      <div className='form-group'>
                        Do You want to close the Case{'    '}
                        <Radio
                          type='radio'
                          name='closecase'
                          checked={closecase === 'yes'}
                          value='yes'
                          onChange={e => onChange(e)}
                        />{' '}
                        Yes{' '}
                        <Radio
                          type='radio'
                          name='closecase'
                          checked={closecase === 'no'}
                          value='no'
                          onChange={e => onChange(e)}
                        />{' '}
                        No
                        <small>
                          {' '}
                          <br /> Select if Every Action for this Case has been
                          Taken <br />
                          Note : You Won't be able to make any changes if you
                          select "Yes" and press the Save Button
                        </small>
                      </div>
                    </Fragment>
                  )}
                  {/* <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )} */}
                  {/* {console.log('btnclosethecase', closethecase)} */}
                  {!closethecase && (
                    <Fragment>
                      {' '}
                      <input
                        type='submit'
                        className='btn btn-primary my-1'
                      />{' '}
                    </Fragment>
                  )}
                  <Link to='/dashboard' className='btn btn-light my-1'>
                    Go Back
                  </Link>
                </form>
              </Paper>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

EditUserdataById.propTypes = {
  editUserdata: PropTypes.func.isRequired,
  getUserdataById: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userdata: state.userdata,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editUserdata, getUserdataById }
)(withRouter(EditUserdataById));

// import React, { Fragment, useState, useEffect } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { editUserdata, getUserdataById } from '../../actions/userdata';

// const EditUserdataById = ({
//   match,
//   getUserdataById,
//   history,
//   userdata: { userdata, loading },
//   editUserdata
// }) => {
//   const [formData, setFormData] = useState({
//     text: ''
//   });

//   useEffect(() => {
//     getUserdataById(match.params.id);

//     //Fill the form with Current VAlues
//     console.log(userdata);
//     setFormData({
//       text: loading || userdata.text ? '' : userdata.text
//     });
//   }, [match, getUserdataById, userdata, loading]);

//   const { text } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = e => {
//     e.preventDefault();
//     editUserdata(formData, history, true);
//   };
//   return (
//     <Fragment>
//       <form className='form' onSubmit={e => onSubmit(e)}>
//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Text'
//             name='text'
//             value={text}
//             onChange={e => onChange(e)}
//           />
//           <small className='form-text'>
//             Could be your own company or one you work for
//           </small>
//         </div>
//         <input type='submit' className='btn btn-primary my-1' />
//         <Link to='/usersdata' className='btn btn-light my-1'>
//           Go Back
//         </Link>
//       </form>
//     </Fragment>
//   );
// };

// EditUserdataById.propTypes = {
//   editUserdata: PropTypes.func.isRequired,
//   getUserdataById: PropTypes.func.isRequired,
//   userdata: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   userdata: state.userdata
// });

// export default connect(
//   mapStateToProps,
//   { editUserdata, getUserdataById }
// )(withRouter(EditUserdataById));
