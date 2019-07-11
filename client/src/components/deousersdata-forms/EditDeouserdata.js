import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { editDeouserdata, getDeouserdataById } from '../../actions/deouserdata';
import { createUserdata } from '../../actions/userdata';
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

const EditDeouserdataById = ({
  getDeouserdataById,
  match,
  deouserdata: { deouserdata, loading },
  createUserdata,
  editDeouserdata,
  history,
  auth: { user }
}) => {
  const [formData, setFormData] = useState({
    text: '',
    year: '',
    returntopolice: false,
    policestation: 'Dhule City',
    crimeregisterno: '',
    dateofcrime: '',
    regdateofcrime: '',
    victimdetails: '',
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
    approve: '',
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
  const [typeofatrocity, setTypeofatrocity] = useState(null);
  const [ipcapplied, setIpc] = useState(null);
  const [sectionsapplied, setSections] = useState(null);
  const [typeofatrocityv2, setTypeofatrocityv2] = useState(null);
  const [ipcappliedv2, setIpcv2] = useState(null);
  const [sectionsappliedv2, setSectionsv2] = useState(null);
  var [closethecase, toggleclossecase] = useState(false);

  var formDataa = new FormData();
  const classes = useStyles();

  const animatedComponents = makeAnimated();
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [displayVictim, toggledisplayVictim] = useState(false);
  const [displayAccused, toggledisplayAccused] = useState(false);

  useEffect(() => {
    getDeouserdataById(match.params.id);

    setFormData({
      text: loading || !deouserdata.text ? '' : deouserdata.text,
      year: loading || !deouserdata.year ? '' : deouserdata.year,
      policestation:
        loading || !deouserdata.policestation ? '' : deouserdata.policestation,
      crimeregisterno:
        loading || !deouserdata.crimeregisterno
          ? ''
          : deouserdata.crimeregisterno,
      dateofcrime:
        loading || !deouserdata.dateofcrime ? '' : deouserdata.dateofcrime,
      regdateofcrime:
        loading || !deouserdata.regdateofcrime
          ? ''
          : deouserdata.regdateofcrime,
      victimdetails:
        loading || !deouserdata.victimdetails ? '' : deouserdata.victimdetails,
      firstbenefitbypolice:
        loading || !deouserdata.firstbenefitbypolice
          ? 'pending'
          : deouserdata.firstbenefitbypolice,
      firstbenefitbycommis:
        loading || !deouserdata.firstbenefitbycommis
          ? 'pending'
          : deouserdata.firstbenefitbycommis,
      firstbenefitbycollector:
        loading || !deouserdata.firstbenefitbycollector
          ? 'pending'
          : deouserdata.firstbenefitbycollector,
      firstbenefitbypolicedate:
        loading || !deouserdata.firstbenefitbypolicedate
          ? ''
          : deouserdata.firstbenefitbypolicedate,
      firstbenefitbycommisdate:
        loading || !deouserdata.firstbenefitbycommisdate
          ? ''
          : deouserdata.firstbenefitbycommisdate,
      firstbenefitbycollectordate:
        loading || !deouserdata.firstbenefitbycollectordate
          ? ''
          : deouserdata.firstbenefitbycollectordate,
      firstbenefitbypolicecomment:
        loading || !deouserdata.firstbenefitbypolicecomment
          ? ''
          : deouserdata.firstbenefitbypolicecomment,
      firstbenefitbycommcomment:
        loading || !deouserdata.firstbenefitbycommcomment
          ? ''
          : deouserdata.firstbenefitbycommcomment,
      firstbenefitbycollectorcomment:
        loading || !deouserdata.firstbenefitbycollectorcomment
          ? ''
          : deouserdata.firstbenefitbycollectorcomment,
      secondbenefitbypolice:
        loading || !deouserdata.secondbenefitbypolice
          ? 'pending'
          : deouserdata.secondbenefitbypolice,
      secondbenefitbycommis:
        loading || !deouserdata.secondbenefitbycommis
          ? 'pending'
          : deouserdata.secondbenefitbycommis,
      secondbenefitbycollector:
        loading || !deouserdata.secondbenefitbycollector
          ? 'pending'
          : deouserdata.secondbenefitbycollector,
      secondbenefitbypolicedate:
        loading || !deouserdata.secondbenefitbypolicedate
          ? ''
          : deouserdata.secondbenefitbypolicedate,
      secondbenefitbycommisdate:
        loading || !deouserdata.secondbenefitbycommisdate
          ? ''
          : deouserdata.secondbenefitbycommisdate,
      secondbenefitbycollectordate:
        loading || !deouserdata.secondbenefitbycollectordate
          ? ''
          : deouserdata.secondbenefitbycollectordate,
      secondbenefitbypolicecomment:
        loading || !deouserdata.secondbenefitbypolicecomment
          ? ''
          : deouserdata.secondbenefitbypolicecomment,
      secondbenefitbycommcomment:
        loading || !deouserdata.secondbenefitbycommcomment
          ? ''
          : deouserdata.secondbenefitbycommcomment,
      secondbenefitbycollectorcomment:
        loading || !deouserdata.secondbenefitbycollectorcomment
          ? ''
          : deouserdata.secondbenefitbycollectorcomment,
      thirdbenefitbypolice:
        loading || !deouserdata.thirdbenefitbypolice
          ? 'pending'
          : deouserdata.thirdbenefitbypolice,
      thirdbenefitbycommis:
        loading || !deouserdata.thirdbenefitbycommis
          ? 'pending'
          : deouserdata.thirdbenefitbycommis,
      thirdbenefitbycollector:
        loading || !deouserdata.thirdbenefitbycollector
          ? 'pending'
          : deouserdata.thirdbenefitbycollector,
      thirdbenefitbypolicedate:
        loading || !deouserdata.thirdbenefitbypolicedate
          ? ''
          : deouserdata.thirdbenefitbypolicedate,
      thirdbenefitbycommisdate:
        loading || !deouserdata.thirdbenefitbycommisdate
          ? ''
          : deouserdata.thirdbenefitbycommisdate,
      thirdbenefitbycollectordate:
        loading || !deouserdata.thirdbenefitbycollectordate
          ? ''
          : deouserdata.thirdbenefitbycollectordate,
      thirdbenefitbypolicecomment:
        loading || !deouserdata.thirdbenefitbypolicecomment
          ? ''
          : deouserdata.thirdbenefitbypolicecomment,
      thirdbenefitbycommcomment:
        loading || !deouserdata.thirdbenefitbycommcomment
          ? ''
          : deouserdata.thirdbenefitbycommcomment,
      thirdbenefitbycollectorcomment:
        loading || !deouserdata.thirdbenefitbycollectorcomment
          ? ''
          : deouserdata.thirdbenefitbycollectorcomment,
      natureofcrime:
        loading || !deouserdata.natureofcrime ? '' : deouserdata.natureofcrime,
      benefitsgivenbyACI:
        loading || !deouserdata.benefitsgivenbyACI
          ? ''
          : deouserdata.benefitsgivenbyACI,
      benefitsgivenbyACII:
        loading || !deouserdata.benefitsgivenbyACII
          ? ''
          : deouserdata.benefitsgivenbyACII,
      benefitsgivenbyACIII:
        loading || !deouserdata.benefitsgivenbyACIII
          ? ''
          : deouserdata.benefitsgivenbyACIII,
      isbenefitsgivenbyACI:
        loading || !deouserdata.isbenefitsgivenbyACI
          ? ''
          : deouserdata.isbenefitsgivenbyACI,
      isbenefitsgivenbyACII:
        loading || !deouserdata.isbenefitsgivenbyACII
          ? ''
          : deouserdata.isbenefitsgivenbyACII,
      isbenefitsgivenbyACIII:
        loading || !deouserdata.isbenefitsgivenbyACIII
          ? ''
          : deouserdata.isbenefitsgivenbyACIII,
      monetarycompbyDCI:
        loading || !deouserdata.monetarycompbyDCI
          ? ''
          : deouserdata.monetarycompbyDCI,
      monetarycompbyDCII:
        loading || !deouserdata.monetarycompbyDCII
          ? ''
          : deouserdata.monetarycompbyDCII,
      monetarycompbyDCIII:
        loading || !deouserdata.monetarycompbyDCIII
          ? ''
          : deouserdata.monetarycompbyDCIII,
      otherbenefitycompbyDCI:
        loading || !deouserdata.otherbenefitycompbyDCI
          ? ''
          : deouserdata.otherbenefitycompbyDCI,
      otherbenefitycompbyDCII:
        loading || !deouserdata.otherbenefitycompbyDCII
          ? ''
          : deouserdata.otherbenefitycompbyDCII,
      otherbenefitycompbyDCIII:
        loading || !deouserdata.otherbenefitycompbyDCIII
          ? ''
          : deouserdata.otherbenefitycompbyDCIII,
      monetarycompbyACI:
        loading || !deouserdata.monetarycompbyACI
          ? ''
          : deouserdata.monetarycompbyACI,
      monetarycompbyACII:
        loading || !deouserdata.monetarycompbyACII
          ? ''
          : deouserdata.monetarycompbyACII,
      monetarycompbyACIII:
        loading || !deouserdata.monetarycompbyACIII
          ? ''
          : deouserdata.monetarycompbyACIII,
      otherbenefitycompbyACI:
        loading || !deouserdata.otherbenefitycompbyACI
          ? ''
          : deouserdata.otherbenefitycompbyACI,
      otherbenefitycompbyACII:
        loading || !deouserdata.otherbenefitycompbyACII
          ? ''
          : deouserdata.otherbenefitycompbyACII,
      otherbenefitycompbyACIII:
        loading || !deouserdata.otherbenefitycompbyACIII
          ? ''
          : deouserdata.otherbenefitycompbyACIII,
      sections: loading || !deouserdata.sections ? '' : deouserdata.sections,
      chargesheetdate:
        loading || !deouserdata.chargesheetdate
          ? ''
          : deouserdata.chargesheetdate,
      dateofcourtorder:
        loading || !deouserdata.dateofcourtorder
          ? ''
          : deouserdata.dateofcourtorder,
      policeinvestigation:
        loading || !deouserdata.policeinvestigation
          ? ''
          : deouserdata.policeinvestigation,
      courtresults:
        loading || !deouserdata.courtresults ? '' : deouserdata.courtresults,
      financialsupport:
        loading || !deouserdata.financialsupport
          ? ''
          : deouserdata.financialsupport,
      approve: loading || !deouserdata.approve ? '' : deouserdata.approve,
      twitter: loading || !deouserdata.twitter ? '' : deouserdata.twitter,
      facebook: loading || !deouserdata.facebook ? '' : deouserdata.facebook,
      linkedin: loading || !deouserdata.linkedin ? '' : deouserdata.linkedin,
      youtube: loading || !deouserdata.youtube ? '' : deouserdata.youtube,
      instagram: loading || !deouserdata.instagram ? '' : deouserdata.instagram,
      disabledata:
        loading || !deouserdata.disabledata ? false : deouserdata.disabledata,
      closecase: loading || !deouserdata.closecase ? '' : deouserdata.closecase,
      stagetwochange:
        loading || !deouserdata.stagetwochange
          ? false
          : deouserdata.stagetwochange,
      sectionschanged:
        loading || !deouserdata.sectionschanged
          ? ''
          : deouserdata.sectionschanged,
      courtorder:
        loading || !deouserdata.courtorder ? '' : deouserdata.courtorder,
      medicalreport:
        loading || !deouserdata.medicalreport ? '' : deouserdata.medicalreport,
      abcSummary:
        loading || !deouserdata.abcSummary ? '' : deouserdata.abcSummary,
      docImage: loading || !deouserdata.docImage ? '' : deouserdata.docImage,
      doccImage: loading || !deouserdata.doccImage ? '' : deouserdata.doccImage,
      postmortem:
        loading || !deouserdata.postmortem ? '' : deouserdata.postmortem,
      victimone: loading || !deouserdata.victimone ? '' : deouserdata.victimone,
      victimtwo: loading || !deouserdata.victimtwo ? '' : deouserdata.victimtwo,
      victimthree:
        loading || !deouserdata.victimthree ? '' : deouserdata.victimthree,
      victimfour:
        loading || !deouserdata.victimfour ? '' : deouserdata.victimfour,
      victimfive:
        loading || !deouserdata.victimfive ? '' : deouserdata.victimfive,
      victimsix: loading || !deouserdata.victimsix ? '' : deouserdata.victimsix,
      victimseven:
        loading || !deouserdata.victimseven ? '' : deouserdata.victimseven,
      victimeight:
        loading || !deouserdata.victimeight ? '' : deouserdata.victimeight,
      accusedone:
        loading || !deouserdata.accusedone ? '' : deouserdata.accusedone,
      accusedtwo:
        loading || !deouserdata.accusedtwo ? '' : deouserdata.accusedtwo,
      accusedthree:
        loading || !deouserdata.accusedthree ? '' : deouserdata.accusedthree,
      accusedfour:
        loading || !deouserdata.accusedfour ? '' : deouserdata.accusedfour,
      accusedfive:
        loading || !deouserdata.accusedfive ? '' : deouserdata.accusedfive,
      accusedsix:
        loading || !deouserdata.accusedsix ? '' : deouserdata.accusedsix,
      accusedseven:
        loading || !deouserdata.accusedseven ? '' : deouserdata.accusedseven,
      accusedeight:
        loading || !deouserdata.accusedeight ? '' : deouserdata.accusedeight
      // closethecase:
      //   loading || !deouserdata.closethecase ? false : deouserdata.closethecase
      //   text: 'Helo'
    });
    setTypeofatrocity(
      loading || !deouserdata.typeofatrocity
        ? null
        : JSON.parse(deouserdata.typeofatrocity)
    );
    setIpc(
      loading || !deouserdata.ipcapplied
        ? null
        : JSON.parse(deouserdata.ipcapplied)
    );
    setSections(
      loading || !deouserdata.sectionsapplied
        ? null
        : JSON.parse(deouserdata.sectionsapplied)
    );
    setTypeofatrocityv2(
      loading || !deouserdata.typeofatrocityv2
        ? null
        : JSON.parse(deouserdata.typeofatrocityv2)
    );
    setIpcv2(
      loading || !deouserdata.ipcappliedv2
        ? null
        : JSON.parse(deouserdata.ipcappliedv2)
    );
    setSectionsv2(
      loading || !deouserdata.sectionsappliedv2
        ? null
        : JSON.parse(deouserdata.sectionsappliedv2)
    );
    toggleclossecase(
      loading || !deouserdata.closethecase ? false : deouserdata.closethecase
    );
  }, [loading, getDeouserdataById, match]);

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
  const {
    text,
    year,
    returntopolice,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    victimdetails,
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
    approve,
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

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    formDataa.append('typeofatrocity', JSON.stringify(typeofatrocity));
    formDataa.append('ipcapplied', JSON.stringify(ipcapplied));
    formDataa.append('sectionsapplied', JSON.stringify(sectionsapplied));
    formDataa.append('typeofatrocityv2', JSON.stringify(typeofatrocityv2));
    formDataa.append('ipcappliedv2', JSON.stringify(ipcappliedv2));
    formDataa.append('sectionsappliedv2', JSON.stringify(sectionsappliedv2));
    formDataa.append('text', formData.text);
    formDataa.append('year', year);
    formDataa.append('policestation', policestation);
    formDataa.append('crimeregisterno', crimeregisterno);
    formDataa.append('dateofcrime', dateofcrime);
    formDataa.append('regdateofcrime', regdateofcrime);
    formDataa.append('victimdetails', victimdetails);
    formDataa.append('natureofcrime', natureofcrime);
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
    formDataa.append('approve', approve);
    if (approve === 'yes') {
      createUserdata(formDataa, history);
      console.log('addeds');
    } else {
      editDeouserdata(match.params.id, formDataa, history);
    }
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
  var maxCompensationv2 = 0;
  var maxCompI = 0;
  var maxCompII = 0;
  var maxCompIII = 0;
  var extrabenefits = [];
  var extrabenefitsv2 = [];

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
        maxCompI = patro.firststage * maxCompensation;
        maxCompII = patro.secondstage * maxCompensation;
        maxCompIII = patro.thirdstage * maxCompensation;
        if (patro.extradetails !== '-' && patro.extradetails !== null) {
          if (extrabenefits.indexOf(patro.extradetails) === -1) {
            extrabenefits.push(patro.extradetails);
          }
        }
      } else {
        if (patro.extradetails !== '-' && patro.extradetails !== null) {
          if (extrabenefits.indexOf(patro.extradetails) === -1) {
            extrabenefits.push(patro.extradetails);
          }
        }
      }
    });
  }

  if (sectionsapplied !== null) {
    sectionsapplied.map((sectionn, i) => {
      if (sectionn.compensation > maxCompensation) {
        maxCompensation = sectionn.compensation;
        maxCompI = sectionn.firststage * maxCompensation;
        maxCompII = sectionn.secondstage * maxCompensation;
        maxCompIII = sectionn.thirdstage * maxCompensation;
        if (
          sectionn.extradetails !== '-' &&
          sectionn.extradetails !== null &&
          sectionn.extradetails !== ''
        ) {
          if (extrabenefits.indexOf(sectionn.extradetails) === -1) {
            extrabenefits.push(sectionn.extradetails);
          }
        }
      } else {
        if (
          sectionn.extradetails !== '-' &&
          sectionn.extradetails !== null &&
          sectionn.extradetails !== ''
        ) {
          if (extrabenefits.indexOf(sectionn.extradetails) === -1) {
            extrabenefits.push(sectionn.extradetails);
          }
        }
      }
    });
  }
  if (sectionsappliedv2 !== null) {
    sectionsappliedv2.map((sectionn, i) => {
      if (sectionn.compensation > maxCompensationv2) {
        maxCompensationv2 = sectionn.compensation;
        maxCompI = sectionn.firststage * maxCompensationv2;
        maxCompII = sectionn.secondstage * maxCompensationv2;
        maxCompIII = sectionn.thirdstage * maxCompensationv2;
        if (sectionn.extradetails !== '-' && sectionn.extradetails !== null) {
          if (extrabenefitsv2.indexOf(sectionn.extradetails) === -1) {
            extrabenefitsv2.push(sectionn.extradetails);
          }
        }
      } else {
        if (sectionn.extradetails !== '-' && sectionn.extradetails !== null) {
          if (extrabenefitsv2.indexOf(sectionn.extradetails) === -1) {
            extrabenefitsv2.push(sectionn.extradetails);
          }
        }
      }
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
      if (patro.compensation > maxCompensationv2) {
        maxCompensationv2 = patro.compensation;
        maxCompI = patro.firststage * maxCompensationv2;
        maxCompII = patro.secondstage * maxCompensationv2;
        maxCompIII = patro.thirdstage * maxCompensationv2;
        if (patro.extradetails !== '-' && patro.extradetails !== null) {
          if (extrabenefitsv2.indexOf(patro.extradetails) === -1) {
            extrabenefitsv2.push(patro.extradetails);
          }
        }
      } else {
        if (patro.extradetails !== '-' && patro.extradetails !== null) {
          if (extrabenefitsv2.indexOf(patro.extradetails) === -1) {
            extrabenefitsv2.push(patro.extradetails);
          }
        }
      }
    });
  }

  // return deouserdata === null || loading ? <h1>loading</h1> : <h1>loaded</h1>;
  return (
    <Fragment>
      {deouserdata === null || loading ? (
        <Spinner />
      ) : deouserdata === null ? (
        <Spinner />
      ) : (
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
                      />
                    </div>
                    <div className='form-group'>
                      Name of Police Station
                      <select
                        name='policestation'
                        value={policestation}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
                      />
                    </div>
                  </div>
                  <div className='maindiv'>
                    <div className='form-group'>
                      Details of Victim
                      <textarea
                        rows='4'
                        cols='2'
                        type='text'
                        placeholder='Details of Victim'
                        name='victimdetails'
                        value={victimdetails}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
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
                        options={options}
                        name='typeofatrocity'
                        value={typeofatrocity}
                        isMulti
                        isSearchable
                        onChange={handleChange}
                        isDisabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        isDisabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        isDisabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />
                  </div>
                  {/*  */}
                  {(sectionsapplied !== null || typeofatrocity !== null) &&
                    (user &&
                      user.name === 'District Collector' &&
                      (user && user.name === 'Asst. Commissioner')) && (
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
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                            Upload seventh Victim's Caste Certificate File{' '}
                            <br />
                            <small>
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                              Note : File Size Should not exceed 6 Mb{'  '}{' '}
                              <br />
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
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                            Upload Second Accused Person's Caste Certificate
                            File <br />
                            <small>
                              <small>Upload jpeg/pdf file here : {'   '}</small>
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                            Upload fourth Accused Person's Caste Certificate
                            File <br />
                            <small>
                              <small>Upload jpeg/pdf file here : {'   '}</small>
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                            Upload seventh Accused Person's Caste Certificate
                            File <br />
                            <small>
                              <small>Upload jpeg/pdf file here : {'   '}</small>
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                              <br /> Note : File Size Should not exceed 6 Mb
                              {'  '}
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
                        <br />{' '}
                        <small>Upload jpeg/pdf file here : {'   '}</small>
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
                        <br />{' '}
                        <small>Upload jpeg/pdf file here : {'   '}</small>
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
                  <div className='maindiv'>
                    <div className='form-group'>
                      Comment on First benefit Recommendation by Police
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='firstbenefitbypolicecomment'
                        value={firstbenefitbypolicecomment}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
                      />{' '}
                      Should be given
                      <Radio
                        type='radio'
                        name='firstbenefitbypolice'
                        checked={firstbenefitbypolice === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
                      />{' '}
                      Should not be given
                      <Radio
                        type='radio'
                        name='firstbenefitbypolice'
                        checked={firstbenefitbypolice === 'pending'}
                        value='pending'
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
                      />{' '}
                      Keep Pending
                    </div>
                  </div>
                  <div className='maindiv'>
                    <div className='form-group'>
                      Monetary Compensation for Stage I by Asst. Commisioner
                      <textarea
                        type='text'
                        placeholder='Amount to be Given'
                        name='monetarycompbyACI'
                        value={monetarycompbyACI}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Asst. Commissioner' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />
                    </div>
                    <div className='form-group'>
                      Other non-monetary benefit for Stage I by Asst.
                      Commisioner
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='otherbenefitycompbyACI'
                        value={otherbenefitycompbyACI}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Asst. Commissioner' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />
                    </div>
                    <div className='form-group'>
                      Other Comments by Asst. Commisioner
                      <textarea
                        type='text'
                        placeholder='Any Other Comments here'
                        name='firstbenefitbycommcomment'
                        value={firstbenefitbycommcomment}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Asst. Commissioner' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
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
                      disabled={
                        user &&
                        user.name !== 'Asst. Commissioner' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />{' '}
                    Should be given
                    <Radio
                      type='radio'
                      name='firstbenefitbycommis'
                      checked={firstbenefitbycommis === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Asst. Commissioner' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />{' '}
                    Should not be given
                    <Radio
                      type='radio'
                      name='firstbenefitbycommis'
                      checked={firstbenefitbycommis === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Asst. Commissioner' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />{' '}
                    Keep Pending
                  </div>
                  <div className='maindiv'>
                    <div className='form-group'>
                      Monetary Compensation for Stage I by District Collector
                      <textarea
                        type='text'
                        placeholder='Amount ot be Given'
                        name='monetarycompbyDCI'
                        value={monetarycompbyDCI}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />
                    </div>
                    <div className='form-group'>
                      Other non-monetary benefit for Stage I by District
                      Collector
                      <textarea
                        type='text'
                        placeholder='Give the Reason for Recommendation'
                        name='otherbenefitycompbyDCI'
                        value={otherbenefitycompbyDCI}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />
                    </div>
                    <div className='form-group'>
                      Other Comments by District Collector
                      <textarea
                        type='text'
                        placeholder='Any Other Comments here'
                        name='firstbenefitbycollectorcomment'
                        value={firstbenefitbycollectorcomment}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />
                    </div>
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
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />{' '}
                    Should be given
                    <Radio
                      type='radio'
                      name='firstbenefitbycollector'
                      checked={firstbenefitbycollector === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />{' '}
                    Should not be given
                    <Radio
                      type='radio'
                      name='firstbenefitbycollector'
                      checked={firstbenefitbycollector === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />{' '}
                    Keep Pending
                  </div>
                  <div className='maindiv'>
                    <div className='form-group'>
                      UTR Number for Money Transfer
                      <input
                        type='text'
                        placeholder='Enter 22 digit UTR Number'
                        name='utrnumI'
                        value={utrnumI}
                        onChange={e => onChange(e)}
                        disabled={
                          (user && user.name === 'Asst. Commissioner') ||
                          (user && user.name !== 'Data Entry Operator')
                        }
                      />
                    </div>
                    <div className='form-group'>
                      Details of non Monetary Benefits for Stage I given by
                      Asst. Commisioner
                      <textarea
                        type='text'
                        placeholder='Amount Given'
                        name='benefitsgivenbyACI'
                        value={benefitsgivenbyACI}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Asst. Commissioner' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
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
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />{' '}
                      Yes
                      <Radio
                        type='radio'
                        name='isbenefitsgivenbyACI'
                        checked={isbenefitsgivenbyACI === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
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
                    disabled={
                      user &&
                      user.name !== 'Police' &&
                      (user && user.name !== 'Data Entry Operator')
                    }
                  />{' '}
                  Yes
                  <Radio
                    type='radio'
                    name='sectionschanged'
                    checked={sectionschanged === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                    disabled={
                      user &&
                      user.name !== 'Police' &&
                      (user && user.name !== 'Data Entry Operator')
                    }
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
                          options={options}
                          name='typeofatrocityv2'
                          value={typeofatrocityv2}
                          isMulti
                          isSearchable
                          onChange={handleChangev2}
                          isDisabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
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
                          isDisabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
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
                          isDisabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
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
                        disabled={
                          user &&
                          user.name !== 'Police' &&
                          (user && user.name !== 'Data Entry Operator')
                        }
                      />
                    </div>
                  </Fragment>
                )}
                {(sectionsappliedv2 !== null || typeofatrocityv2 !== null) &&
                  (user &&
                    user.name === 'District Collector' &&
                    (user && user.name === 'Asst. Commissioner')) && (
                    <div>
                      <h3>
                        Since Sections have Changed, Please Verify Whether less
                        or more compensaton were given in Ist stage
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
                        <br />{' '}
                        <small>Upload jpeg/pdf file here : {'   '}</small>
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
                        <br />{' '}
                        <small>Upload jpeg/pdf file here : {'   '}</small>
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
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />
                  </div>
                  <div className='form-group'>
                    <Paper className={classes.root}>
                      Upload ChargeSheet File <br />
                      <small>
                        Note : File Size Should not exceed 6 Mb{'  '}
                      </small>
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
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
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
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />{' '}
                    Should be given
                    <Radio
                      type='radio'
                      name='secondbenefitbypolice'
                      checked={secondbenefitbypolice === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />{' '}
                    Should not be given
                    <Radio
                      type='radio'
                      name='secondbenefitbypolice'
                      checked={secondbenefitbypolice === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
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
                      disabled={
                        user &&
                        user.name !== 'Asst. Commissioner' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Other non-monetary benefit for Stage II by Asst. Commisioner
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='otherbenefitycompbyACII'
                      value={otherbenefitycompbyACII}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Asst. Commissioner' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Other Comments by Asst. Commisioner
                    <textarea
                      type='text'
                      placeholder='Any Other Comments here'
                      name='secondbenefitbycommcomment'
                      value={secondbenefitbycommcomment}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Asst. Commissioner' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
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
                    disabled={
                      user &&
                      user.name !== 'Asst. Commissioner' &&
                      user &&
                      user.name !== 'Data Entry Operator'
                    }
                  />{' '}
                  Should be given
                  <Radio
                    type='radio'
                    name='secondbenefitbycommis'
                    checked={secondbenefitbycommis === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                    disabled={
                      user &&
                      user.name !== 'Asst. Commissioner' &&
                      user &&
                      user.name !== 'Data Entry Operator'
                    }
                  />{' '}
                  Should not be given
                  <Radio
                    type='radio'
                    name='secondbenefitbycommis'
                    checked={secondbenefitbycommis === 'pending'}
                    value='pending'
                    onChange={e => onChange(e)}
                    disabled={
                      user &&
                      user.name !== 'Asst. Commissioner' &&
                      user &&
                      user.name !== 'Data Entry Operator'
                    }
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
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Other non-monetary benefit for Stage II by District
                    Collector
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='otherbenefitycompbyDCII'
                      value={otherbenefitycompbyDCII}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Other Comments by District Collector
                    <textarea
                      type='text'
                      placeholder='Any Other Comments here'
                      name='secondbenefitbycollectorcomment'
                      value={secondbenefitbycollectorcomment}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
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
                    disabled={
                      user &&
                      user.name !== 'District Collector' &&
                      user &&
                      user.name !== 'Data Entry Operator'
                    }
                  />{' '}
                  Should be given
                  <Radio
                    type='radio'
                    name='secondbenefitbycollector'
                    checked={secondbenefitbycollector === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                    disabled={
                      user &&
                      user.name !== 'District Collector' &&
                      user &&
                      user.name !== 'Data Entry Operator'
                    }
                  />{' '}
                  Should not be given
                  <Radio
                    type='radio'
                    name='secondbenefitbycollector'
                    checked={secondbenefitbycollector === 'pending'}
                    value='pending'
                    onChange={e => onChange(e)}
                    disabled={
                      user &&
                      user.name !== 'District Collector' &&
                      user &&
                      user.name !== 'Data Entry Operator'
                    }
                  />{' '}
                  Keep Pending
                </div>
                <div className='maindiv'>
                  <div className='form-group'>
                    UTR Number for Money Transfer for Stage II
                    <input
                      type='text'
                      placeholder='Enter 22 digit UTR Number'
                      name='utrnumII'
                      value={utrnumII}
                      onChange={e => onChange(e)}
                      disabled={
                        (user && user.name === 'Asst. Commissioner') ||
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Details of Non Monetary Benefits given for Stage II by Asst.
                    Commisioner
                    <textarea
                      type='text'
                      placeholder='Amount Given'
                      name='benefitsgivenbyACII'
                      value={benefitsgivenbyACII}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Asst. Commissioner' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
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
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='isbenefitsgivenbyACII'
                      checked={isbenefitsgivenbyACII === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'District Collector' &&
                        user &&
                        user.name !== 'Data Entry Operator'
                      }
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
                          disabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
                        />
                      </div>
                      <div className='form-group' style={{ flexGrow: 6 }}>
                        Summary of Court Order
                        <textarea
                          rows='6'
                          type='text'
                          placeholder='Court Results'
                          name='courtresults'
                          value={courtresults}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
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
                          disabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
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
                          disabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
                        />{' '}
                        Should be given
                        <Radio
                          type='radio'
                          name='thirdbenefitbypolice'
                          checked={thirdbenefitbypolice === 'no'}
                          value='no'
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
                        />{' '}
                        Should not be given
                        <Radio
                          type='radio'
                          name='thirdbenefitbypolice'
                          checked={thirdbenefitbypolice === 'pending'}
                          value='pending'
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'Police' &&
                            (user && user.name !== 'Data Entry Operator')
                          }
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
                          disabled={
                            user &&
                            user.name !== 'Asst. Commissioner' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
                        />
                      </div>
                      <div className='form-group'>
                        Other non-monetary benefit for Stage III by Asst.
                        Commisioner
                        <textarea
                          type='text'
                          placeholder='Give the Reason for Recommendation'
                          name='otherbenefitycompbyACIII'
                          value={otherbenefitycompbyACIII}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'Asst. Commissioner' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
                        />
                      </div>
                      <div className='form-group'>
                        Other Comments by Asst. Commisioner
                        <textarea
                          type='text'
                          placeholder='Any Other Comments here'
                          name='thirdbenefitbycommcomment'
                          value={thirdbenefitbycommcomment}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'Asst. Commissioner' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
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
                        disabled={
                          user &&
                          user.name !== 'Asst. Commissioner' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />{' '}
                      Should be given
                      <Radio
                        type='radio'
                        name='thirdbenefitbycommis'
                        checked={thirdbenefitbycommis === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Asst. Commissioner' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />{' '}
                      Should not be given
                      <Radio
                        type='radio'
                        name='thirdbenefitbycommis'
                        checked={thirdbenefitbycommis === 'pending'}
                        value='pending'
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'Asst. Commissioner' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
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
                          disabled={
                            user &&
                            user.name !== 'District Collector' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
                        />
                      </div>
                      <div className='form-group'>
                        Other non-monetary benefit for Stage III by District
                        Collector
                        <textarea
                          type='text'
                          placeholder='Give the Reason for Recommendation'
                          name='otherbenefitycompbyDCIII'
                          value={otherbenefitycompbyDCIII}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'District Collector' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
                        />
                      </div>
                      <div className='form-group'>
                        Other Comments by District Collector
                        <textarea
                          type='text'
                          placeholder='Other Comments'
                          name='thirdbenefitbycollectorcomment'
                          value={thirdbenefitbycollectorcomment}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'District Collector' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
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
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />{' '}
                      Should be given
                      <Radio
                        type='radio'
                        name='thirdbenefitbycollector'
                        checked={thirdbenefitbycollector === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />{' '}
                      Should not be given
                      <Radio
                        type='radio'
                        name='thirdbenefitbycollector'
                        checked={thirdbenefitbycollector === 'pending'}
                        value='pending'
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.name !== 'District Collector' &&
                          user &&
                          user.name !== 'Data Entry Operator'
                        }
                      />{' '}
                      Keep Pending
                    </div>
                    <div className='maindiv'>
                      <div className='form-group'>
                        UTR Number for Money Transfer for Stage III
                        <input
                          type='text'
                          placeholder='Enter 22 digit UTR Number'
                          name='utrnumIII'
                          value={utrnumIII}
                          onChange={e => onChange(e)}
                          disabled={
                            (user && user.name === 'Asst. Commissioner') ||
                            (user && user.name !== 'Data Entry Operator')
                          }
                        />
                      </div>
                      <div className='form-group'>
                        Details of Non Monetary Benefits given for Stage III by
                        Asst. Commisioner
                        <textarea
                          type='text'
                          placeholder='Amount Given'
                          name='benefitsgivenbyACIII'
                          value={benefitsgivenbyACIII}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'Asst. Commissioner' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
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
                          disabled={
                            user &&
                            user.name !== 'District Collector' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
                        />{' '}
                        Yes
                        <Radio
                          type='radio'
                          name='isbenefitsgivenbyACIII'
                          checked={isbenefitsgivenbyACIII === 'no'}
                          value='no'
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.name !== 'District Collector' &&
                            user &&
                            user.name !== 'Data Entry Operator'
                          }
                        />{' '}
                        No
                      </div>
                    </div>
                  </Fragment>
                )}
                {!disabledata && user && user.name === 'District Collector' && (
                  <Fragment>
                    <div className='form-group'>
                      Do You want to close the Case{'    '}
                      <Radio
                        type='radio'
                        name='closecase'
                        checked={closecase === 'yes'}
                        value='yes'
                        onChange={e => onChange(e)}
                        disabled={user && user.name !== 'District Collector'}
                      />{' '}
                      Yes{' '}
                      <Radio
                        type='radio'
                        name='closecase'
                        checked={closecase === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                        disabled={user && user.name !== 'District Collector'}
                      />{' '}
                      No
                      <small>
                        {' '}
                        <br />
                        Select if Every Action for this Case has been Taken{' '}
                        <br /> Note : No Changes can be made in the details
                        above if yes is selected and Submit Button is pressed
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
                {user && user.name === 'Asst. Commissioner' && (
                  <div className='form-group'>
                    Approve
                    <br />
                    <Radio
                      type='radio'
                      name='approve'
                      checked={approve === 'yes'}
                      value='yes'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />{' '}
                    Yes
                    <Radio
                      type='radio'
                      name='approve'
                      checked={approve === 'no'}
                      value='no'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />{' '}
                    No
                    <Radio
                      type='radio'
                      name='approve'
                      checked={approve === 'pending'}
                      value='pending'
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.name !== 'Police' &&
                        (user && user.name !== 'Data Entry Operator')
                      }
                    />{' '}
                    Keep Pending
                  </div>
                )}
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
      )}
    </Fragment>
  );
};

EditDeouserdataById.propTypes = {
  editDeouserdata: PropTypes.func.isRequired,
  getDeouserdataById: PropTypes.func.isRequired,
  createUserdata: PropTypes.func.isRequired,
  deouserdata: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  deouserdata: state.deouserdata,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editDeouserdata, getDeouserdataById, createUserdata }
)(withRouter(EditDeouserdataById));

// import React, { Fragment, useState, useEffect } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { editDeouserdata, getDeouserdataById } from '../../actions/userdata';

// const EditDeouserdataById = ({
//   match,
//   getDeouserdataById,
//   history,
//   userdata: { userdata, loading },
//   editDeouserdata
// }) => {
//   const [formData, setFormData] = useState({
//     text: ''
//   });

//   useEffect(() => {
//     getDeouserdataById(match.params.id);

//     //Fill the form with Current VAlues
//     console.log(userdata);
//     setFormData({
//       text: loading || userdata.text ? '' : userdata.text
//     });
//   }, [match, getDeouserdataById, userdata, loading]);

//   const { text } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = e => {
//     e.preventDefault();
//     editDeouserdata(formData, history, true);
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

// EditDeouserdataById.propTypes = {
//   editDeouserdata: PropTypes.func.isRequired,
//   getDeouserdataById: PropTypes.func.isRequired,
//   userdata: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   userdata: state.userdata
// });

// export default connect(
//   mapStateToProps,
//   { editDeouserdata, getDeouserdataById }
// )(withRouter(EditDeouserdataById));
