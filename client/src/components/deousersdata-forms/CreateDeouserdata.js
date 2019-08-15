import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createDeouserdata } from '../../actions/deouserdata';
import Select from 'react-select';
import {
  ipcOptions,
  sectionsopts1995,
  sectionsopts2013,
  sectionsopts,
  options2011,
  options2013,
  options2016
} from './ipcdata';
import makeAnimated from 'react-select/animated';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
import './main.css';

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

const CreateDeouserdata = ({ createDeouserdata, history, auth: { user } }) => {
  var formDataa = new FormData();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    text: '',
    firno: '',
    policestation: 'Dhule City',
    crimeregisterno: '',
    dateofcrime: '',
    regdateofcrime: '',
    complainanttype: 'no',
    natureofcrime: '',
    utrnumI: '',
    utrnumII: '',
    utrnumIII: '',
    benefitsgivenbyACI: '',
    benefitsgivenbyACII: '',
    benefitsgivenbyACIII: '',
    isbenefitsgivenbyACI: '',
    isbenefitsgivenbyACII: '',
    isbenefitsgivenbyACIII: '',
    monetarycompbyDCI: '',
    monetarycompbyDCII: '',
    monetarycompbyDCIII: '',
    otherbenefitycompbyDCI: '',
    otherbenefitycompbyDCII: '',
    otherbenefitycompbyDCIII: '',
    monetarycompbyACI: '',
    monetarycompbyACII: '',
    monetarycompbyACIII: '',
    otherbenefitycompbyACI: '',
    otherbenefitycompbyACII: '',
    otherbenefitycompbyACIII: '',
    firstbenefitbypolice: '',
    firstbenefitbycommis: '',
    firstbenefitbycollector: '',
    firstbenefitbypolicedate: '',
    firstbenefitbycommisdate: '',
    firstbenefitbycollectordate: '',
    firstbenefitbypolicecomment: '',
    firstbenefitbycommcomment: '',
    firstbenefitbycollectorcomment: '',
    secondbenefitbypolice: '',
    secondbenefitbycommis: '',
    secondbenefitbycollector: '',
    secondbenefitbypolicedate: '',
    secondbenefitbycommisdate: '',
    secondbenefitbycollectordate: '',
    secondbenefitbypolicecomment: '',
    secondbenefitbycommcomment: '',
    secondbenefitbycollectorcomment: '',
    thirdbenefitbypolice: '',
    thirdbenefitbycommis: '',
    thirdbenefitbycollector: '',
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
    stagetwochange: false,
    closecase: '',
    othersections: '',
    othersectionsv2: '',
    sectionschanged: 'no',
    docImage: '',
    doccImage: '',
    courtorder: '',
    postmortem: '',
    medicalreport: '',
    abcSummary: '',
    victimone: '',
    victimtwo: '',
    victimthree: '',
    victimfour: '',
    victimfive: '',
    victimsix: '',
    victimseven: '',
    victimeight: '',
    accusedone: '',
    accusedtwo: '',
    accusedthree: '',
    accusedfour: '',
    accusedfive: '',
    accusedsix: '',
    accusedseven: '',
    accusedeight: ''
  });

  const animatedComponents = makeAnimated();

  // const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [displayVictim, toggledisplayVictim] = useState(false);
  const [displayAccused, toggledisplayAccused] = useState(false);
  var [closethecase, toggleclossecase] = useState(false);

  // console.log(user && user.role === 'Sara');

  const {
    text,
    firno,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    complainanttype,
    natureofcrime,
    utrnumI,
    utrnumII,
    utrnumIII,
    benefitsgivenbyACI,
    benefitsgivenbyACII,
    benefitsgivenbyACIII,
    isbenefitsgivenbyACI,
    isbenefitsgivenbyACII,
    isbenefitsgivenbyACIII,
    monetarycompbyDCI,
    monetarycompbyDCII,
    monetarycompbyDCIII,
    otherbenefitycompbyDCI,
    otherbenefitycompbyDCII,
    otherbenefitycompbyDCIII,
    monetarycompbyACI,
    monetarycompbyACII,
    monetarycompbyACIII,
    otherbenefitycompbyACI,
    otherbenefitycompbyACII,
    otherbenefitycompbyACIII,
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
    sections,
    chargesheetdate,
    policeinvestigation,
    dateofcourtorder,
    courtresults,
    financialsupport,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
    disabledata,
    closecase,
    othersections,
    othersectionsv2,
    sectionschanged,
    stagetwochange,
    docImage,
    doccImage,
    courtorder,
    postmortem,
    medicalreport,
    abcSummary,
    victimone,
    victimtwo,
    victimthree,
    victimfour,
    victimfive,
    victimsix,
    victimseven,
    victimeight,
    accusedone,
    accusedtwo,
    accusedthree,
    accusedfour,
    accusedfive,
    accusedsix,
    accusedseven,
    accusedeight
  } = formData;

  // var today = new Date();
  // console.log(setDate(today.getDate() - 10));
  // Date().s;

  const [victimdetails, setVictimFields] = useState([
    {
      name: '',
      age: '',
      sex: '',
      village: '',
      taluka: '',
      district: '',
      utrnumone: '',
      utrnumtwo: '',
      utrnumthree: '',
      otherinfo: ''
    }
  ]);
  const [accuseddetails, setAccusedFields] = useState([
    {
      name: '',
      age: '',
      sex: '',
      village: '',
      taluka: '',
      district: '',
      otherinfo: ''
    }
  ]);
  const [complainantdetails, setComplainantFields] = useState([
    {
      name: '',
      age: '',
      sex: '',
      village: '',
      taluka: '',
      district: '',
      otherinfo: ''
    }
  ]);

  const [typeofatrocity, setTypeofatrocity] = useState(null);
  const [ipcapplied, setIpc] = useState(null);
  const [sectionsapplied, setSections] = useState(null);
  const [typeofatrocityv2, setTypeofatrocityv2] = useState(null);
  const [ipcappliedv2, setIpcv2] = useState(null);
  const [sectionsappliedv2, setSectionsv2] = useState(null);

  //Dynamic Input
  function handleChangeVictimInput(i, event) {
    const values = [...victimdetails];
    const { name, value } = event.target;
    // values[i].value = value;
    // values[i].value1 = value1;
    values[i][name] = value;
    setVictimFields(values);
    console.log(victimdetails);
    console.log(JSON.stringify(victimdetails));
  }

  function handleAddVictimInput() {
    const values = [...victimdetails];
    values.push({
      name: '',
      age: '',
      sex: '',
      village: '',
      taluka: '',
      district: '',
      utrnumone: '',
      utrnumtwo: '',
      utrnumthree: '',
      otherinfo: ''
    });
    setVictimFields(values);
  }

  function handleRemoveVictimInput(i) {
    const values = [...victimdetails];
    console.log(values);
    values.splice(i, 1);
    setVictimFields(values);
  }
  //Dynamic
  function handleChangeComplainantInput(i, event) {
    const values = [...complainantdetails];
    const { name, value } = event.target;
    // values[i].value = value;
    // values[i].value1 = value1;
    values[i][name] = value;
    setComplainantFields(values);
    if (complainanttype === 'yes') {
      handleChangeVictimInput(i, event);
    }
    // console.log(complainantdetails);
    // console.log(JSON.stringify(complainantdetails));
  }

  function handleAddComplainantInput() {
    const values = [...complainantdetails];
    values.push({
      name: '',
      age: '',
      sex: '',
      village: '',
      taluka: '',
      district: '',
      otherinfo: ''
    });
    setComplainantFields(values);
    if (complainanttype === 'yes') {
      handleAddVictimInput();
    }
  }

  function handleRemoveComplainantInput(i) {
    const values = [...complainantdetails];
    console.log(values);
    values.splice(i, 1);
    setComplainantFields(values);
    if (complainanttype === 'yes') {
      handleRemoveVictimInput(i);
    }
  }
  //Dynamic Input
  function handleChangeAccusedInput(i, event) {
    const values = [...accuseddetails];
    const { name, value } = event.target;
    // values[i].value = value;
    // values[i].value1 = value1;
    values[i][name] = value;
    setAccusedFields(values);
    console.log(accuseddetails);
  }

  function handleAddAccusedInput() {
    const values = [...accuseddetails];
    values.push({
      name: '',
      age: '',
      sex: '',
      village: '',
      taluka: '',
      district: '',
      otherinfo: ''
    });
    setAccusedFields(values);
  }

  function handleRemoveAccusedInput(i) {
    const values = [...accuseddetails];
    console.log(values);
    values.splice(i, 1);
    setAccusedFields(values);
  }

  const handleChange = typeofatrocity => {
    setTypeofatrocity(typeofatrocity);
  };
  const handleIpc = ipcapplied => {
    setIpc(ipcapplied);
  };
  const handleSections = sectionsapplied => {
    setSections(sectionsapplied);
  };
  const handleChangev2 = typeofatrocityv2 => {
    setTypeofatrocityv2(typeofatrocityv2);
  };
  const handleIpcv2 = ipcappliedv2 => {
    setIpcv2(ipcappliedv2);
  };
  const handleSectionsv2 = sectionsappliedv2 => {
    setSectionsv2(sectionsappliedv2);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    formDataa.append(e.target.name, e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    formDataa.append('typeofatrocity', JSON.stringify(typeofatrocity));
    formDataa.append('ipcapplied', JSON.stringify(ipcapplied));
    formDataa.append('sectionsapplied', JSON.stringify(sectionsapplied));
    formDataa.append('typeofatrocityv2', JSON.stringify(typeofatrocityv2));
    formDataa.append('ipcappliedv2', JSON.stringify(ipcappliedv2));
    formDataa.append('sectionsappliedv2', JSON.stringify(sectionsappliedv2));
    formDataa.append('text', formData.text);
    formDataa.append('firno', firno);
    formDataa.append('policestation', policestation);
    formDataa.append('crimeregisterno', crimeregisterno);
    formDataa.append('dateofcrime', dateofcrime);
    formDataa.append('regdateofcrime', regdateofcrime);
    formDataa.append('victimdetails', JSON.stringify(victimdetails));
    formDataa.append('accuseddetails', JSON.stringify(accuseddetails));
    formDataa.append('complainantdetails', JSON.stringify(complainantdetails));
    formDataa.append('natureofcrime', natureofcrime);
    formDataa.append('utrnumI', utrnumI);
    formDataa.append('utrnumII', utrnumII);
    formDataa.append('utrnumIII', utrnumIII);
    formDataa.append('benefitsgivenbyACI', benefitsgivenbyACI);
    formDataa.append('benefitsgivenbyACII', benefitsgivenbyACII);
    formDataa.append('benefitsgivenbyACIII', benefitsgivenbyACIII);
    formDataa.append('isbenefitsgivenbyACI', isbenefitsgivenbyACI);
    formDataa.append('isbenefitsgivenbyACII', isbenefitsgivenbyACII);
    formDataa.append('isbenefitsgivenbyACIII', isbenefitsgivenbyACIII);
    formDataa.append('monetarycompbyDCI', monetarycompbyDCI);
    formDataa.append('monetarycompbyDCII', monetarycompbyDCII);
    formDataa.append('monetarycompbyDCIII', monetarycompbyDCIII);
    formDataa.append('otherbenefitycompbyDCI', otherbenefitycompbyDCI);
    formDataa.append('otherbenefitycompbyDCII', otherbenefitycompbyDCII);
    formDataa.append('otherbenefitycompbyDCIII', otherbenefitycompbyDCIII);
    formDataa.append('monetarycompbyACI', monetarycompbyACI);
    formDataa.append('monetarycompbyACII', monetarycompbyACII);
    formDataa.append('monetarycompbyACIII', monetarycompbyACIII);
    formDataa.append('otherbenefitycompbyACI', otherbenefitycompbyACI);
    formDataa.append('otherbenefitycompbyACII', otherbenefitycompbyACII);
    formDataa.append('otherbenefitycompbyACIII', otherbenefitycompbyACIII);
    formDataa.append('firstbenefitbypolice', firstbenefitbypolice);

    formDataa.append('firstbenefitbypolicedate', firstbenefitbypolicedate);

    formDataa.append('firstbenefitbycommisdate', firstbenefitbypolicedate);

    formDataa.append('firstbenefitbycollectordate', firstbenefitbypolicedate);

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

    formDataa.append('secondbenefitbypolicedate', secondbenefitbypolicedate);

    formDataa.append('secondbenefitbycommisdate', secondbenefitbypolicedate);

    formDataa.append('secondbenefitbycollectordate', secondbenefitbypolicedate);

    formDataa.append('secondbenefitbypolice', secondbenefitbypolice);
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

    formDataa.append('thirdbenefitbypolicedate', thirdbenefitbypolicedate);

    formDataa.append('thirdbenefitbycommisdate', thirdbenefitbypolicedate);

    formDataa.append('thirdbenefitbycollectordate', thirdbenefitbypolicedate);

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
    }
    formDataa.append('closecase', closecase);
    formDataa.append('othersections', othersections);
    formDataa.append('othersectionsv2', othersectionsv2);
    formDataa.append('sectionschanged', sectionschanged);
    formDataa.append('stagetwochange', stagetwochange);
    formDataa.append('closethecase', closethecase);
    formDataa.append('docImage', docImage);
    formDataa.append('doccImage', doccImage);
    formDataa.append('courtorder', courtorder);
    formDataa.append('postmortem', postmortem);
    formDataa.append('medicalreport', medicalreport);
    formDataa.append('abcSummary', abcSummary);
    formDataa.append('victimone', victimone);
    formDataa.append('victimtwo', victimtwo);
    formDataa.append('victimthree', victimthree);
    formDataa.append('victimfour', victimfour);
    formDataa.append('victimfive', victimfive);
    formDataa.append('victimsix', victimsix);
    formDataa.append('victimseven', victimseven);
    formDataa.append('victimeight', victimeight);
    formDataa.append('accusedone', accusedone);
    formDataa.append('accusedtwo', accusedtwo);
    formDataa.append('accusedthree', accusedthree);
    formDataa.append('accusedfour', accusedfour);
    formDataa.append('accusedfive', accusedfive);
    formDataa.append('accusedsix', accusedsix);
    formDataa.append('accusedseven', accusedseven);
    formDataa.append('accusedeight', accusedeight);

    createDeouserdata(formDataa, history);
    // for (const value of formDataa.values()) {
    //   console.log(value);
    // }
  };

  var dpmedical = false;
  var dpmurder = false;
  var dpmurderIII = false;
  var dpacidIII = false;
  var dpdisabilityIII = false;
  var maxCompensation = 0;
  var extrabenefits = [];

  if (typeofatrocity !== null) {
    typeofatrocity.map((patro, i) => {
      if (patro.value === 'rape' || patro.value === '3(2)(va) 326B') {
        dpmedical = true;
      }
      if (patro.value === 'murder') {
        dpmurder = true;
      }
      if (patro.value === 'murder' && sectionschanged === 'no') {
        dpmurderIII = true;
      }
      if (patro.value === '3(2)(va) 326B' && sectionschanged === 'no') {
        dpacidIII = true;
      }
      if (
        patro.value === 'permanentIncapacitation' &&
        sectionschanged === 'no'
      ) {
        dpdisabilityIII = true;
      }
      if (patro.compensation > maxCompensation) {
        maxCompensation = patro.compensation;
        extrabenefits.push(patro.extrabenefits);
      } else {
        extrabenefits.push(patro.extrabenefits);
      }
      console.log(maxCompensation);
      console.log(extrabenefits);
    });
  }

  if (typeofatrocityv2 !== null) {
    typeofatrocityv2.map((patro, i) => {
      if (patro.value === 'rape' || patro.value === '3(2)(va) 326B') {
        dpmedical = true;
      }
      if (patro.value === 'murder') {
        dpmurder = true;
      }
      if (patro.value === 'murder') {
        dpmurderIII = true;
      }
      if (patro.value === '3(2)(va) 326B') {
        dpacidIII = true;
      }
      if (patro.value === 'permanentIncapacitation') {
        dpdisabilityIII = true;
      }
    });
  }

  return (
    <Fragment>
      <div className='createuserbg'>
        <div style={{ margin: '10% 3%' }}>
          <Paper className={classes.rooot}>
            <h1 className='large text-primary'>Add New FIR</h1>
            <p className='lead'>
              <i className='fas fa-user' /> Let's add some information to FIR
            </p>
            {/* <small>* = required field</small> */}
            <form
              className='form'
              onSubmit={e => onSubmit(e)}
              encType='multipart/form-data'
              method='POST'
            >
              <div style={{ backgroundColor: 'white' }}>
                <hr className='style-one' /> <br />
                <div className='maindiv'>
                  <div className='form-group'>
                    Serial No.
                    <input
                      type='text'
                      placeholder='Serial No.'
                      name='text'
                      value={text}
                      onChange={e => onChange(e)}
                    />
                    <small className='form-text'>
                      Could be the defined format of serial no
                    </small>
                  </div>
                  <div className='form-group'>
                    FIR No.
                    <input
                      type='text'
                      placeholder='FIR No.'
                      name='firno'
                      value={firno}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    Name of Police Station
                    <select
                      name='policestation'
                      value={policestation}
                      onChange={e => onChange(e)}
                    >
                      <option value='Dhule City'>Dhule City </option>
                      <option value='Aazadnagar' defaultValue>
                        Aazadnagar
                      </option>
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
                </div>
                <div className='maindiv'>
                  <div className='form-group'>
                    Register No.
                    <input
                      type='text'
                      placeholder='Register No.'
                      name='crimeregisterno'
                      value={crimeregisterno}
                      onChange={e => onChange(e)}
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
                    />
                  </div>
                </div>
                <div className=''>
                  <div style={{ margin: '18px 20px' }}>
                    {' '}
                    <b>Complainant Details</b>
                    <Button
                      type='button'
                      onClick={() => handleAddComplainantInput()}
                    >
                      <i className='fa fa-plus' aria-hidden='true' />
                    </Button>
                    Are the Complainant and Victim Same?
                    <Radio
                      type='radio'
                      name='complainanttype'
                      checked={complainanttype === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='complainanttype'
                      checked={complainanttype === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                    />{' '}
                    No
                    <br />
                    <small style={{ marginLeft: '16%' }}>
                      Select <b>'Yes'</b> to copy/duplicate complainant details
                      to victim details and <b>'No'</b> to disable duplication.
                    </small>
                  </div>
                  {complainantdetails.map((field, idx) => {
                    return (
                      <div key={`${field}-${idx}`} className='maindiv'>
                        <div className='form-group'>
                          Name
                          <input
                            type='text'
                            name='name'
                            value={accuseddetails.name}
                            placeholder='Enter Name'
                            onChange={e => {
                              handleChangeComplainantInput(idx, e);
                            }}
                          />
                        </div>
                        <div className='form-group'>
                          Age
                          <input
                            type='text'
                            name='age'
                            value={accuseddetails.age}
                            placeholder='Enter Age'
                            onChange={e => handleChangeComplainantInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Sex
                          <input
                            type='text'
                            name='sex'
                            value={accuseddetails.sex}
                            placeholder='Enter Sex'
                            onChange={e => handleChangeComplainantInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Village
                          <input
                            type='text'
                            name='village'
                            value={accuseddetails.village}
                            placeholder='Enter Village'
                            onChange={e => handleChangeComplainantInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Taluka
                          <input
                            type='text'
                            name='taluka'
                            value={accuseddetails.taluka}
                            placeholder='Enter Taluka'
                            onChange={e => handleChangeComplainantInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          District
                          <input
                            type='text'
                            name='district'
                            value={accuseddetails.district}
                            placeholder='Enter District'
                            onChange={e => handleChangeComplainantInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Other Info
                          <textarea
                            type='text'
                            name='otherinfo'
                            value={accuseddetails.otherinfo}
                            placeholder='Enter Other Info'
                            onChange={e => handleChangeComplainantInput(idx, e)}
                          />
                        </div>
                        <Button
                          type='button'
                          onClick={() => handleAddComplainantInput()}
                        >
                          <i className='fa fa-plus' aria-hidden='true' />
                        </Button>
                        <Button
                          type='button'
                          onClick={() => handleRemoveComplainantInput(idx)}
                        >
                          <i className='fa fa-times' aria-hidden='true' />
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className=''>
                  <div style={{ margin: '18px 20px' }}>
                    {' '}
                    <b>Victim Details</b>
                    <Button
                      type='button'
                      onClick={() => handleAddVictimInput()}
                    >
                      <i className='fa fa-plus' aria-hidden='true' />
                    </Button>
                  </div>
                  {victimdetails.map((field, idx) => {
                    return (
                      <div key={`${field}-${idx}`} className='maindiv'>
                        <div className='form-group'>
                          Name
                          <input
                            type='text'
                            name='name'
                            value={field.name}
                            placeholder='Enter Name'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Age
                          <input
                            type='text'
                            name='age'
                            value={field.age}
                            placeholder='Enter Age'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Sex
                          <input
                            type='text'
                            name='sex'
                            value={field.sex}
                            placeholder='Enter Sex'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Village
                          <input
                            type='text'
                            name='village'
                            value={field.village}
                            placeholder='Enter Village'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Taluka
                          <input
                            type='text'
                            name='taluka'
                            value={field.taluka}
                            placeholder='Enter Taluka'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          District
                          <input
                            type='text'
                            name='district'
                            value={field.district}
                            placeholder='Enter District'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Other Info
                          <textarea
                            type='text'
                            name='otherinfo'
                            value={field.otherinfo}
                            placeholder='Enter Other Info'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                        <Button
                          type='button'
                          onClick={() => handleAddVictimInput()}
                        >
                          <i className='fa fa-plus' aria-hidden='true' />
                        </Button>
                        <Button
                          type='button'
                          onClick={() => handleRemoveVictimInput(idx)}
                        >
                          <i className='fa fa-times' aria-hidden='true' />
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className=''>
                  <div style={{ margin: '18px 20px' }}>
                    {' '}
                    <b>Accused Details</b>
                    <Button
                      type='button'
                      onClick={() => handleAddAccusedInput()}
                    >
                      <i className='fa fa-plus' aria-hidden='true' />
                    </Button>
                  </div>
                  {accuseddetails.map((field, idx) => {
                    return (
                      <div key={`${field}-${idx}`} className='maindiv'>
                        <div className='form-group'>
                          Name
                          <input
                            type='text'
                            name='name'
                            value={accuseddetails.name}
                            placeholder='Enter Name'
                            onChange={e => handleChangeAccusedInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Age
                          <input
                            type='text'
                            name='age'
                            value={accuseddetails.age}
                            placeholder='Enter Age'
                            onChange={e => handleChangeAccusedInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Sex
                          <input
                            type='text'
                            name='sex'
                            value={accuseddetails.sex}
                            placeholder='Enter Sex'
                            onChange={e => handleChangeAccusedInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Village
                          <input
                            type='text'
                            name='village'
                            value={accuseddetails.village}
                            placeholder='Enter Village'
                            onChange={e => handleChangeAccusedInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Taluka
                          <input
                            type='text'
                            name='taluka'
                            value={accuseddetails.taluka}
                            placeholder='Enter Taluka'
                            onChange={e => handleChangeAccusedInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          District
                          <input
                            type='text'
                            name='district'
                            value={accuseddetails.district}
                            placeholder='Enter District'
                            onChange={e => handleChangeAccusedInput(idx, e)}
                          />
                        </div>
                        <div className='form-group'>
                          Other Info
                          <textarea
                            type='text'
                            name='otherinfo'
                            value={accuseddetails.otherinfo}
                            placeholder='Enter Other Info'
                            onChange={e => handleChangeAccusedInput(idx, e)}
                          />
                        </div>
                        <Button
                          type='button'
                          onClick={() => handleAddAccusedInput()}
                        >
                          <i className='fa fa-plus' aria-hidden='true' />
                        </Button>
                        <Button
                          type='button'
                          onClick={() => handleRemoveAccusedInput(idx)}
                        >
                          <i className='fa fa-times' aria-hidden='true' />
                        </Button>
                      </div>
                    );
                  })}
                </div>
                <div className='maindiv'>
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
                      disabled={
                        user &&
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
                      }
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex'
                  }}
                >
                  <div style={{ flex: 1, margin: '19px 5px -5px 12px' }}>
                    Type of Crime
                    <Select
                      minWidth='100px'
                      className='basic-multi-select'
                      menuShouldScrollIntoView={true}
                      classNamePrefix='select'
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={
                        Date.parse(dateofcrime) >=
                        Date.parse('13 Dec 2011 00:00:00 GMT')
                          ? Date.parse(dateofcrime) >=
                            Date.parse('24 Apr 2016 00:00:00 GMT')
                            ? options2016
                            : options2013
                          : options2011
                      }
                      name='typeofatrocity'
                      value={typeofatrocity}
                      isMulti
                      isSearchable
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ flex: 1, margin: '19px 5px -5px 12px' }}>
                    Select IPC Sections
                    <Select
                      styles={{ width: '300px' }}
                      className='basic-multi-select'
                      classNamePrefix='select'
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={ipcOptions}
                      name='ipcapplied'
                      value={ipcapplied}
                      isMulti
                      isSearchable
                      onChange={handleIpc}
                    />
                  </div>
                  <div style={{ flex: 1, margin: '19px 5px -5px 12px' }}>
                    Select Atrocity Act Sections
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      options={sectionsopts}
                      name='sectionsapplied'
                      value={sectionsapplied}
                      isMulti
                      isSearchable
                      onChange={handleSections}
                    />
                  </div>{' '}
                </div>
                <div className='form-group'>
                  Other Sections
                  <textarea
                    rows='4'
                    cols='2'
                    type='text'
                    placeholder='Details of Other Sections applied'
                    name='othersections'
                    value={othersections}
                    onChange={e => onChange(e)}
                  />
                </div>
                {/*  */}
                {(sectionsapplied !== null || typeofatrocity !== null) &&
                  (user &&
                    user.role === 'District Collector' &&
                    (user && user.role === 'Asst. Commissioner')) && (
                    <div>
                      <table className='fl-table'>
                        <thead>
                          <tr>
                            <th>Section</th>
                            <th>Compensation</th>
                            <th>First Stage</th>
                            <th>Second Stage</th>
                            <th>Third Stage</th>
                            <th>Extra Details/Benefits</th>
                          </tr>
                        </thead>
                        <tbody style={{ overflow: 'scroll' }}>
                          {sectionsapplied !== null ? (
                            sectionsapplied.map((sectionn, i) => (
                              <Fragment>
                                <tr>
                                  <td>{sectionn.label}</td>
                                  <td>
                                    {sectionn.compensation <= 0
                                      ? '-'
                                      : sectionn.compensation}
                                  </td>
                                  <td>
                                    {sectionn.firststage <= 0
                                      ? '-'
                                      : sectionn.compensation *
                                        sectionn.firststage}
                                  </td>
                                  <td>
                                    {sectionn.secondstage <= 0
                                      ? '-'
                                      : sectionn.compensation *
                                        sectionn.secondstage}
                                  </td>
                                  <td>
                                    {sectionn.thirdstage <= 0
                                      ? '-'
                                      : sectionn.compensation *
                                        sectionn.thirdstage}
                                  </td>
                                  <td>{sectionn.extradetails}</td>
                                </tr>
                              </Fragment>
                            ))
                          ) : (
                            <tr>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                            </tr>
                          )}
                          {typeofatrocity !== null ? (
                            typeofatrocity.map((sectionn, i) => (
                              <Fragment>
                                <tr>
                                  <td>{sectionn.label}</td>
                                  <td>
                                    {sectionn.compensation <= 0
                                      ? '-'
                                      : sectionn.compensation}
                                  </td>
                                  <td>
                                    {sectionn.firststage <= 0
                                      ? '-'
                                      : sectionn.compensation *
                                        sectionn.firststage}
                                  </td>
                                  <td>
                                    {sectionn.secondstage <= 0
                                      ? '-'
                                      : sectionn.compensation *
                                        sectionn.secondstage}
                                  </td>
                                  <td>
                                    {sectionn.thirdstage <= 0
                                      ? '-'
                                      : sectionn.compensation *
                                        sectionn.thirdstage}
                                  </td>
                                  <td>{sectionn.extradetails}</td>
                                </tr>
                              </Fragment>
                            ))
                          ) : (
                            <tr>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                              <td>No Data</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                {/*  */}
                <div className='my-2'>
                  <Button
                    onClick={() => toggledisplayVictim(!displayVictim)}
                    type='button'
                    variant='contained'
                    className={classes.button}
                  >
                    Add Victim's Caste Certificate
                  </Button>
                  <span>*Required</span>
                </div>
                {displayVictim && (
                  <Fragment>
                    <h3>Add Victim's Details</h3>
                    <div className='maindiv'>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload first Victim's Caste Certificate File <br />
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
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
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
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
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
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
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
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
                    </div>
                    <div className='maindiv'>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload fifth Victim's Caste Certificate File <br />
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
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
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload Sixth Victim's Caste Certificate File <br />
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
                          <input
                            type='file'
                            name='victimsix'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimsix: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload seventh Victim's Caste Certificate File <br />
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
                          <input
                            type='file'
                            name='victimseven'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimseven: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload other Victim's Caste Certificate File <br />
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '} <br />
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                          </small>
                          <input
                            type='file'
                            name='victimeight'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, victimeight: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
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
                  <span>*Required</span>
                </div>
                {displayAccused && (
                  <Fragment>
                    <h3>Add Accused Person's Details</h3>
                    <div className='maindiv'>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload first Accused Person's Caste Certificate File{' '}
                          <br />
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
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
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
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
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
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
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
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
                    </div>
                    <div className='maindiv'>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload fifth Accused Person's Caste Certificate File{' '}
                          <br />
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
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
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload Sixth Accused Person's Caste Certificate File{' '}
                          <br />
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
                          <input
                            type='file'
                            name='accusedsix'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedsix: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload seventh Accused Person's Caste Certificate File{' '}
                          <br />
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
                          <input
                            type='file'
                            name='accusedseven'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedseven: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload other Accused Person's Caste Certificate File{' '}
                          <br />
                          <small>
                            <small>Upload jpeg/pdf file here : {'   '}</small>
                            <br /> Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
                          <input
                            type='file'
                            name='accusedeight'
                            onChange={e => {
                              const vall = e.target.files[0];
                              setFormData(prevState => {
                                return { ...prevState, accusedeight: vall };
                              });
                            }}
                          />
                        </Paper>
                      </div>
                    </div>
                  </Fragment>
                )}
                <div className='maindiv'>
                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload FIR File <br />
                      <small>
                        Note : File Size Should not exceed 6 Mb{'  '}
                      </small>
                      <br /> <small>Upload jpeg/pdf file here : {'   '}</small>
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
                      Upload A/B/C Summary File <br />
                      <small>
                        Note : File Size Should not exceed 6 Mb{'  '}
                      </small>
                      <br /> <small>Upload jpeg/pdf file here : {'   '}</small>
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
                </div>
                <div className='form-group'>
                  Date for Stage I Decisions
                  <input
                    type='date'
                    placeholder='Date When Decision was taken'
                    name='firstbenefitbypolicedate'
                    value={firstbenefitbypolicedate}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='maindiv'>
                  <div className='form-group'>
                    Comment on First benefit Recommendation by Police
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='firstbenefitbypolicecomment'
                      value={firstbenefitbypolicecomment}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    <br />
                    First Benefit Recommendation by Police
                    <Radio
                      type='radio'
                      name='firstbenefitbypolice'
                      checked={firstbenefitbypolice === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                    />{' '}
                    Should be given
                    <Radio
                      type='radio'
                      name='firstbenefitbypolice'
                      checked={firstbenefitbypolice === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                    />{' '}
                    Should not be given
                    <Radio
                      type='radio'
                      name='firstbenefitbypolice'
                      checked={firstbenefitbypolice === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                    />{' '}
                    Keep Pending
                  </div>
                </div>
                <div className='maindiv'>
                  <div className='form-group'>
                    Monetary Compensation for Stage I by Asst. Commisioner
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='monetarycompbyACI'
                      value={monetarycompbyACI}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    Any other benefit for Stage I by Asst. Commisioner
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='otherbenefitycompbyACI'
                      value={otherbenefitycompbyACI}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    Other Comments by Asst. Commisioner
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='firstbenefitbycommcomment'
                      value={firstbenefitbycommcomment}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  First Benefit Recommendation by Assistant Commisioner
                  <Radio
                    type='radio'
                    name='firstbenefitbycommis'
                    checked={firstbenefitbycommis === 'yes'}
                    value='yes'
                    onChange={e => onChange(e)}
                  />{' '}
                  Should be given
                  <Radio
                    type='radio'
                    name='firstbenefitbycommis'
                    checked={firstbenefitbycommis === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                  />{' '}
                  Should not be given
                  <Radio
                    type='radio'
                    name='firstbenefitbycommis'
                    checked={firstbenefitbycommis === 'pending'}
                    value='pending'
                    onChange={e => onChange(e)}
                  />{' '}
                  Keep Pending
                </div>
                <div className='maindiv'>
                  <div className='form-group'>
                    Monetary Compensation for Stage I by District Collector
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='monetarycompbyDCI'
                      value={monetarycompbyDCI}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    Any other benefit for Stage I by District Collector
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='otherbenefitycompbyDCI'
                      value={otherbenefitycompbyDCI}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    Other Comments by District Collector
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='firstbenefitbycollectorcomment'
                      value={firstbenefitbycollectorcomment}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div className='form-group'>
                  Decision for distribution of first Benefit District Collector
                  <Radio
                    type='radio'
                    name='firstbenefitbycollector'
                    checked={firstbenefitbycollector === 'yes'}
                    value='yes'
                    onChange={e => onChange(e)}
                  />{' '}
                  Should be given
                  <Radio
                    type='radio'
                    name='firstbenefitbycollector'
                    checked={firstbenefitbycollector === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                  />{' '}
                  Should not be given
                  <Radio
                    type='radio'
                    name='firstbenefitbycollector'
                    checked={firstbenefitbycollector === 'pending'}
                    value='pending'
                    onChange={e => onChange(e)}
                  />{' '}
                  Keep Pending
                </div>
                {victimdetails.map((field, idx) => {
                  return (
                    <div key={`${field}-${idx}`} className='maindiv'>
                      <div className='form-group'>
                        UTR Number for Money Transfer for Victim {idx + 1}{' '}
                        (Stage I)
                        <input
                          type='text'
                          name='utrnumone'
                          value={field.utrnumone}
                          placeholder='Enter 22 digit UTR Number'
                          onChange={e => handleChangeVictimInput(idx, e)}
                        />
                      </div>
                    </div>
                  );
                })}
                <div className='maindiv'>
                  {/* <div className='form-group'>
                    UTR Number for Money Transfer
                    <input
                      type='text'
                      placeholder='Enter 22 digit UTR Number'
                      name='utrnumI'
                      value={utrnumI}
                      onChange={e => onChange(e)}
                    />
                  </div> */}
                  <div className='form-group'>
                    Details of non Monetary Benefits for Stage I given by Asst.
                    Commisioner
                    <textarea
                      type='text'
                      placeholder='Amount Given'
                      name='benefitsgivenbyACI'
                      value={benefitsgivenbyACI}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    <br />
                    Whether all benefits were given by Asst. Commisioner
                    <Radio
                      type='radio'
                      name='isbenefitsgivenbyACI'
                      checked={isbenefitsgivenbyACI === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='isbenefitsgivenbyACI'
                      checked={isbenefitsgivenbyACI === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                    />{' '}
                    No
                  </div>
                </div>
              </div>
              <hr className='style-two' />
              <div className='form-group'>
                Were there any changes in the sections applied?
                <Radio
                  type='radio'
                  name='sectionschanged'
                  checked={sectionschanged === 'yes'}
                  value='yes'
                  onChange={e => onChange(e)}
                />{' '}
                Yes
                <Radio
                  type='radio'
                  name='sectionschanged'
                  checked={sectionschanged === 'no'}
                  value='no'
                  onChange={e => onChange(e)}
                />{' '}
                No
              </div>
              {sectionschanged === 'yes' && (
                <Fragment>
                  <div
                    style={{
                      display: 'flex'
                    }}
                  >
                    <div style={{ flex: 1, margin: '0px 5px 15px 12px' }}>
                      Type of Crime
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={
                          Date.parse(dateofcrime) >=
                          Date.parse('13 Dec 2011 00:00:00 GMT')
                            ? Date.parse(dateofcrime) >=
                              Date.parse('24 Apr 2016 00:00:00 GMT')
                              ? options2016
                              : options2013
                            : options2011
                        }
                        name='typeofatrocityv2'
                        value={typeofatrocityv2}
                        isMulti
                        isSearchable
                        onChange={handleChangev2}
                      />
                    </div>
                    <div style={{ flex: 1, margin: '0px 5px 15px 12px' }}>
                      Select IPC Sections
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={ipcOptions}
                        name='ipcappliedv2'
                        value={ipcappliedv2}
                        isMulti
                        isSearchable
                        onChange={handleIpcv2}
                      />
                    </div>
                    <div style={{ flex: 1, margin: '0px 5px 15px 12px' }}>
                      Select Atrocity Act Sections
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={sectionsopts}
                        name='sectionsappliedv2'
                        value={sectionsappliedv2}
                        isMulti
                        isSearchable
                        onChange={handleSectionsv2}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    Other Sections
                    <textarea
                      rows='4'
                      cols='2'
                      type='text'
                      placeholder='Details of Other Sections Applied'
                      name='othersectionsv2'
                      value={othersectionsv2}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </Fragment>
              )}
              {(sectionsappliedv2 !== null || typeofatrocityv2 !== null) &&
                (user &&
                  user.role === 'District Collector' &&
                  (user && user.role === 'Asst. Commissioner')) && (
                  <div>
                    <h3>
                      Since Sections have Changed, Please Verify Whether less or
                      more compensaton were given in Ist stage
                    </h3>

                    <table className='fl-table'>
                      <thead>
                        <tr>
                          <th>Section</th>
                          <th>Compensation</th>
                          <th>First Stage</th>
                          <th>Second Stage</th>
                          <th>Third Stage</th>
                          <th>Extra Details/Benefits</th>
                        </tr>
                      </thead>
                      <tbody style={{ overflow: 'scroll' }}>
                        {sectionsappliedv2 !== null ? (
                          sectionsappliedv2.map((sectionn, i) => (
                            <Fragment>
                              <tr>
                                <td>{sectionn.label}</td>
                                <td>
                                  {sectionn.compensation <= 0
                                    ? '-'
                                    : sectionn.compensation}
                                </td>
                                <td>
                                  {sectionn.firststage <= 0
                                    ? '-'
                                    : sectionn.compensation *
                                      sectionn.firststage}
                                </td>
                                <td>
                                  {sectionn.secondstage <= 0
                                    ? '-'
                                    : sectionn.compensation *
                                      sectionn.secondstage}
                                </td>
                                <td>
                                  {sectionn.thirdstage <= 0
                                    ? '-'
                                    : sectionn.compensation *
                                      sectionn.thirdstage}
                                </td>
                                <td>{sectionn.extradetails}</td>
                              </tr>
                            </Fragment>
                          ))
                        ) : (
                          <tr>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                          </tr>
                        )}
                        {typeofatrocityv2 !== null ? (
                          typeofatrocityv2.map((sectionn, i) => (
                            <Fragment>
                              <tr>
                                <td>{sectionn.label}</td>
                                <td>
                                  {sectionn.compensation <= 0
                                    ? '-'
                                    : sectionn.compensation}
                                </td>
                                <td>
                                  {sectionn.firststage <= 0
                                    ? '-'
                                    : sectionn.compensation *
                                      sectionn.firststage}
                                </td>
                                <td>
                                  {sectionn.secondstage <= 0
                                    ? '-'
                                    : sectionn.compensation *
                                      sectionn.secondstage}
                                </td>
                                <td>
                                  {sectionn.thirdstage <= 0
                                    ? '-'
                                    : sectionn.compensation *
                                      sectionn.thirdstage}
                                </td>
                                <td>{sectionn.extradetails}</td>
                              </tr>
                            </Fragment>
                          ))
                        ) : (
                          <tr>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                            <td>No Data</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              <br />
              <br />
              <div className='maindiv'>
                {dpmurder && (
                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload PostMortem File <br />
                      <small>
                        Note : File Size Should not exceed 6 Mb{'  '}
                      </small>
                      <br /> <small>Upload jpeg/pdf file here : {'   '}</small>
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
                )}
                {dpmedical && (
                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload Medical Report File <br />
                      <small>
                        Note : File Size Should not exceed 6 Mb{'  '}
                      </small>
                      <br /> <small>Upload jpeg/pdf file here : {'   '}</small>
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
                )}
              </div>
              <div className='maindiv'>
                <div className='form-group'>
                  Date When Chargesheet was filed in the court <br />
                  <input
                    type='date'
                    placeholder='Date When Chargesheet was filed in the court'
                    name='chargesheetdate'
                    value={chargesheetdate}
                    onChange={e => onChange(e)}
                    disabled={user && user.role !== 'Data Entry Operator'}
                  />
                  Date for Stage II Decisions
                  <input
                    type='date'
                    placeholder='Date When Decision II was taken'
                    name='secondbenefitbypolicedate'
                    value={secondbenefitbypolicedate}
                    onChange={e => onChange(e)}
                    disabled={user && user.role !== 'Data Entry Operator'}
                  />
                </div>
                <div className='form-group'>
                  <Paper className={classes.root}>
                    Upload ChargeSheet File <br />
                    <small>Note : File Size Should not exceed 6 Mb{'  '}</small>
                    <br /> <small>Upload jpeg/pdf file here : {'   '}</small>
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
              </div>
              <div className='maindiv'>
                <div className='form-group'>
                  Comment on Second benefit Recommendation by Police
                  <textarea
                    type='text'
                    placeholder='Give the Reason for Recommendation'
                    name='secondbenefitbypolicecomment'
                    value={secondbenefitbypolicecomment}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <br />
                  Second Benefit Recommendation by Police
                  <Radio
                    type='radio'
                    name='secondbenefitbypolice'
                    checked={secondbenefitbypolice === 'yes'}
                    value='yes'
                    onChange={e => onChange(e)}
                  />{' '}
                  Should be given
                  <Radio
                    type='radio'
                    name='secondbenefitbypolice'
                    checked={secondbenefitbypolice === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                  />{' '}
                  Should not be given
                  <Radio
                    type='radio'
                    name='secondbenefitbypolice'
                    checked={secondbenefitbypolice === 'pending'}
                    value='pending'
                    onChange={e => onChange(e)}
                  />{' '}
                  Keep Pending
                </div>
              </div>
              <div className='maindiv'>
                <div className='form-group'>
                  Monetary Compensation for Stage II by Asst. Commisioner
                  <textarea
                    type='text'
                    placeholder='Give the Reason for Recommendation'
                    name='monetarycompbyACII'
                    value={monetarycompbyACII}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  Any other benefit for Stage II by Asst. Commisioner
                  <textarea
                    type='text'
                    placeholder='Give the Reason for Recommendation'
                    name='otherbenefitycompbyACII'
                    value={otherbenefitycompbyACII}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  Other Comments by Asst. Commisioner
                  <textarea
                    type='text'
                    placeholder='Give the Reason for Recommendation'
                    name='secondbenefitbycommcomment'
                    value={secondbenefitbycommcomment}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className='form-group'>
                Second Benefit Recommendation by Assistant Commisioner
                <Radio
                  type='radio'
                  name='secondbenefitbycommis'
                  checked={secondbenefitbycommis === 'yes'}
                  value='yes'
                  onChange={e => onChange(e)}
                />{' '}
                Should be given
                <Radio
                  type='radio'
                  name='secondbenefitbycommis'
                  checked={secondbenefitbycommis === 'no'}
                  value='no'
                  onChange={e => onChange(e)}
                />{' '}
                Should not be given
                <Radio
                  type='radio'
                  name='secondbenefitbycommis'
                  checked={secondbenefitbycommis === 'pending'}
                  value='pending'
                  onChange={e => onChange(e)}
                />{' '}
                Keep Pending
              </div>
              <div className='maindiv'>
                <div className='form-group'>
                  Monetary Compensation for Stage II by District Collector
                  <textarea
                    type='text'
                    placeholder='Give the Reason for Recommendation'
                    name='monetarycompbyDCII'
                    value={monetarycompbyDCII}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  Any other benefit for Stage II by District Collector
                  <textarea
                    type='text'
                    placeholder='Give the Reason for Recommendation'
                    name='otherbenefitycompbyDCII'
                    value={otherbenefitycompbyDCII}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  Other Comments by District Collector
                  <textarea
                    type='text'
                    placeholder='Give the Reason for Recommendation'
                    name='secondbenefitbycollectorcomment'
                    value={secondbenefitbycollectorcomment}
                    onChange={e => onChange(e)}
                  />
                </div>
              </div>
              <div className='form-group'>
                Decision for distribution of second Benefit District Collector
                <Radio
                  type='radio'
                  name='secondbenefitbycollector'
                  checked={secondbenefitbycollector === 'yes'}
                  value='yes'
                  onChange={e => onChange(e)}
                />{' '}
                Should be given
                <Radio
                  type='radio'
                  name='secondbenefitbycollector'
                  checked={secondbenefitbycollector === 'no'}
                  value='no'
                  onChange={e => onChange(e)}
                />{' '}
                Should not be given
                <Radio
                  type='radio'
                  name='secondbenefitbycollector'
                  checked={secondbenefitbycollector === 'pending'}
                  value='pending'
                  onChange={e => onChange(e)}
                />{' '}
                Keep Pending
              </div>
              {victimdetails.map((field, idx) => {
                return (
                  <div key={`${field}-${idx}`} className='maindiv'>
                    <div className='form-group'>
                      UTR Number for Money Transfer for Victim {idx + 1} (Stage
                      II)
                      <input
                        type='text'
                        name='utrnumtwo'
                        value={field.utrnumtwo}
                        placeholder='Enter 22 digit UTR Number'
                        onChange={e => handleChangeVictimInput(idx, e)}
                      />
                    </div>
                  </div>
                );
              })}
              <div className='maindiv'>
                {/* <div className='form-group'>
                  UTR Number for Money Transfer for Stage II
                  <input
                    type='text'
                    placeholder='Enter 22 digit UTR Number'
                    name='utrnumII'
                    value={utrnumII}
                    onChange={e => onChange(e)}
                  />
                </div> */}
                <div className='form-group'>
                  Details of Non Monetary Benefits given for Stage II by Asst.
                  Commisioner
                  <textarea
                    type='text'
                    placeholder='Amount Given'
                    name='benefitsgivenbyACII'
                    value={benefitsgivenbyACII}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  Whether all benefits were given for Stage II by Asst.
                  Commisioner
                  <Radio
                    type='radio'
                    name='isbenefitsgivenbyACII'
                    checked={isbenefitsgivenbyACII === 'yes'}
                    value='yes'
                    onChange={e => onChange(e)}
                  />{' '}
                  Yes
                  <Radio
                    type='radio'
                    name='isbenefitsgivenbyACII'
                    checked={isbenefitsgivenbyACII === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                  />{' '}
                  No
                </div>
              </div>
              <br />
              {!dpmurderIII && !dpacidIII && !dpdisabilityIII && (
                <Fragment>
                  <hr className='style-three' />
                  <br />
                  <div className='maindiv'>
                    <div className='form-group'>
                      Date of Court Order
                      <input
                        type='date'
                        placeholder='Date of Court Order'
                        name='dateofcourtorder'
                        value={dateofcourtorder}
                        onChange={e => onChange(e)}
                      />
                      Date for Stage III Decisions
                      <input
                        type='date'
                        placeholder='Date of Court Order'
                        name='thirdbenefitbypolicedate'
                        value={thirdbenefitbypolicedate}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group' style={{ flexGrow: 2 }}>
                      Summary of Court Order
                      <textarea
                        rows='6'
                        type='text'
                        placeholder='Court Results'
                        name='courtresults'
                        value={courtresults}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <Paper className={classes.root}>
                        Upload Court Order File <br />
                        <small>
                          Note : File Size Should not exceed 6 Mb{'  '}
                        </small>
                        <br />{' '}
                        <small>Upload jpeg/pdf file here : {'   '}</small>
                        <input
                          type='file'
                          name='courtorder'
                          onChange={e => {
                            const vall = e.target.files[0];
                            setFormData(prevState => {
                              return { ...prevState, courtorder: vall };
                            });
                          }}
                        />
                      </Paper>
                    </div>
                  </div>
                  <div className='maindiv'>
                    <div className='form-group'>
                      Comment on Third benefit Recommendation by Police
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='thirdbenefitbypolicecomment'
                        value={thirdbenefitbypolicecomment}
                        onChange={e => onChange(e)}
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
                      />{' '}
                      Should be given
                      <Radio
                        type='radio'
                        name='thirdbenefitbypolice'
                        checked={thirdbenefitbypolice === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                      />{' '}
                      Should not be given
                      <Radio
                        type='radio'
                        name='thirdbenefitbypolice'
                        checked={thirdbenefitbypolice === 'pending'}
                        value='pending'
                        onChange={e => onChange(e)}
                      />{' '}
                      Keep Pending
                    </div>
                  </div>
                  <div className='maindiv'>
                    <div className='form-group'>
                      Monetary Compensation for Stage III by Asst. Commisioner
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='monetarycompbyACIII'
                        value={monetarycompbyACIII}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      Any other benefit for Stage III by Asst. Commisioner
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='otherbenefitycompbyACIII'
                        value={otherbenefitycompbyACIII}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      Other Comments by Asst. Commisioner
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='thirdbenefitbycommcomment'
                        value={thirdbenefitbycommcomment}
                        onChange={e => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    Third Benefit Recommendation by Assistant Commisioner
                    <Radio
                      type='radio'
                      name='thirdbenefitbycommis'
                      checked={thirdbenefitbycommis === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                    />{' '}
                    Should be given
                    <Radio
                      type='radio'
                      name='thirdbenefitbycommis'
                      checked={thirdbenefitbycommis === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                    />{' '}
                    Should not be given
                    <Radio
                      type='radio'
                      name='thirdbenefitbycommis'
                      checked={thirdbenefitbycommis === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                    />{' '}
                    Keep Pending
                  </div>
                  <div className='maindiv'>
                    <div className='form-group'>
                      Monetary Compensation III by District Collector
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='monetarycompbyDCIII'
                        value={monetarycompbyDCIII}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      Any other benefit for Stage III by District Collector
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='otherbenefitycompbyDCIII'
                        value={otherbenefitycompbyDCIII}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      Other Comments by District Collector
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='thirdbenefitbycollectorcomment'
                        value={thirdbenefitbycollectorcomment}
                        onChange={e => onChange(e)}
                      />
                    </div>
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
                    />{' '}
                    Should be given
                    <Radio
                      type='radio'
                      name='thirdbenefitbycollector'
                      checked={thirdbenefitbycollector === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                    />{' '}
                    Should not be given
                    <Radio
                      type='radio'
                      name='thirdbenefitbycollector'
                      checked={thirdbenefitbycollector === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                    />{' '}
                    Keep Pending
                  </div>
                  {victimdetails.map((field, idx) => {
                    return (
                      <div key={`${field}-${idx}`} className='maindiv'>
                        <div className='form-group'>
                          UTR Number for Money Transfer for Victim {idx + 1}{' '}
                          (Stage III)
                          <input
                            type='text'
                            name='utrnumthree'
                            value={field.utrnumthree}
                            placeholder='Enter 22 digit UTR Number'
                            onChange={e => handleChangeVictimInput(idx, e)}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className='maindiv'>
                    {/* <div className='form-group'>
                      UTR Number for Money Transfer for Stage III
                      <input
                        type='text'
                        placeholder='Enter 22 digit UTR Number'
                        name='utrnumIII'
                        value={utrnumIII}
                        onChange={e => onChange(e)}
                      />
                    </div> */}
                    <div className='form-group'>
                      Details of Non Monetary Benefits given for Stage III by
                      Asst. Commisioner
                      <textarea
                        type='text'
                        placeholder='Amount Given'
                        name='benefitsgivenbyACIII'
                        value={benefitsgivenbyACIII}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <br />
                      Whether all benefits were given for Stage III by Asst.
                      Commisioner
                      <Radio
                        type='radio'
                        name='isbenefitsgivenbyACIII'
                        checked={isbenefitsgivenbyACIII === 'yes'}
                        value='yes'
                        onChange={e => onChange(e)}
                      />{' '}
                      Yes
                      <Radio
                        type='radio'
                        name='isbenefitsgivenbyACIII'
                        checked={isbenefitsgivenbyACIII === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                      />{' '}
                      No
                    </div>
                  </div>
                </Fragment>
              )}
              {!disabledata && user && user.role === 'District Collector' && (
                <Fragment>
                  <div className='form-group'>
                    Do You want to close the Case{'    '}
                    <Radio
                      type='radio'
                      name='closecase'
                      checked={closecase === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={user && user.role !== 'District Collector'}
                    />{' '}
                    Yes{' '}
                    <Radio
                      type='radio'
                      name='closecase'
                      checked={closecase === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={user && user.role !== 'District Collector'}
                    />{' '}
                    No
                    <small>
                      {' '}
                      <br />
                      Select if Every Action for this Case has been Taken <br />{' '}
                      Note : No Changes can be made in the details above if yes
                      is selected and Submit Button is pressed
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
              {/* Sticky Button */}
              <div className='icon-bar'>
                {!closethecase && (
                  <Fragment>
                    {' '}
                    <input
                      type='submit'
                      className='btn btn-primary pulse-button'
                    />{' '}
                  </Fragment>
                )}
              </div>
              {!closethecase && (
                <Fragment>
                  {' '}
                  <input type='submit' className='btn btn-primary my-1' />{' '}
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
  );
};

CreateDeouserdata.propTypes = {
  createDeouserdata: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createDeouserdata }
)(withRouter(CreateDeouserdata));
