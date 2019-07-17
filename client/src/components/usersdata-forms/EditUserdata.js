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
    firno: '',
    returntopolice: false,
    returntopolicecomment: '',
    policestation: 'Dhule City',
    crimeregisterno: '',
    dateofcrime: '',
    regdateofcrime: '',
    victimdetails: '',
    accuseddetails: '',
    complainantdetails: '',
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
    getUserdataById(match.params.id);

    setFormData({
      text: loading || !userdata.text ? '' : userdata.text,
      firno: loading || !userdata.firno ? '' : userdata.firno,
      othersections:
        loading || !userdata.othersections ? '' : userdata.othersections,
      othersectionsv2:
        loading || !userdata.othersectionsv2 ? '' : userdata.othersectionsv2,
      returntopolice:
        loading || !userdata.returntopolice ? false : userdata.returntopolice,
      returntopolicecomment:
        loading || !userdata.returntopolicecomment
          ? ''
          : userdata.returntopolicecomment,
      policestation:
        loading || !userdata.policestation ? '' : userdata.policestation,
      crimeregisterno:
        loading || !userdata.crimeregisterno ? '' : userdata.crimeregisterno,
      dateofcrime: loading || !userdata.dateofcrime ? '' : userdata.dateofcrime,
      regdateofcrime:
        loading || !userdata.regdateofcrime ? '' : userdata.regdateofcrime,
      victimdetails:
        loading || !userdata.victimdetails ? '' : userdata.victimdetails,
      accuseddetails:
        loading || !userdata.accuseddetails ? '' : userdata.accuseddetails,
      complainantdetails:
        loading || !userdata.complainantdetails
          ? ''
          : userdata.complainantdetails,
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
          ? 'pendingpending'
          : userdata.secondbenefitbypolice,
      secondbenefitbycommis:
        loading || !userdata.secondbenefitbycommis
          ? 'pendingpending'
          : userdata.secondbenefitbycommis,
      secondbenefitbycollector:
        loading || !userdata.secondbenefitbycollector
          ? 'pendingpending'
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
      benefitsgivenbyACI:
        loading || !userdata.benefitsgivenbyACI
          ? ''
          : userdata.benefitsgivenbyACI,
      benefitsgivenbyACII:
        loading || !userdata.benefitsgivenbyACII
          ? ''
          : userdata.benefitsgivenbyACII,
      benefitsgivenbyACIII:
        loading || !userdata.benefitsgivenbyACIII
          ? ''
          : userdata.benefitsgivenbyACIII,
      isbenefitsgivenbyACI:
        loading || !userdata.isbenefitsgivenbyACI
          ? ''
          : userdata.isbenefitsgivenbyACI,
      isbenefitsgivenbyACII:
        loading || !userdata.isbenefitsgivenbyACII
          ? ''
          : userdata.isbenefitsgivenbyACII,
      isbenefitsgivenbyACIII:
        loading || !userdata.isbenefitsgivenbyACIII
          ? ''
          : userdata.isbenefitsgivenbyACIII,
      monetarycompbyDCI:
        loading || !userdata.monetarycompbyDCI
          ? ''
          : userdata.monetarycompbyDCI,
      monetarycompbyDCII:
        loading || !userdata.monetarycompbyDCII
          ? ''
          : userdata.monetarycompbyDCII,
      monetarycompbyDCIII:
        loading || !userdata.monetarycompbyDCIII
          ? ''
          : userdata.monetarycompbyDCIII,
      otherbenefitycompbyDCI:
        loading || !userdata.otherbenefitycompbyDCI
          ? ''
          : userdata.otherbenefitycompbyDCI,
      otherbenefitycompbyDCII:
        loading || !userdata.otherbenefitycompbyDCII
          ? ''
          : userdata.otherbenefitycompbyDCII,
      otherbenefitycompbyDCIII:
        loading || !userdata.otherbenefitycompbyDCIII
          ? ''
          : userdata.otherbenefitycompbyDCIII,
      monetarycompbyACI:
        loading || !userdata.monetarycompbyACI
          ? ''
          : userdata.monetarycompbyACI,
      monetarycompbyACII:
        loading || !userdata.monetarycompbyACII
          ? ''
          : userdata.monetarycompbyACII,
      monetarycompbyACIII:
        loading || !userdata.monetarycompbyACIII
          ? ''
          : userdata.monetarycompbyACIII,
      otherbenefitycompbyACI:
        loading || !userdata.otherbenefitycompbyACI
          ? ''
          : userdata.otherbenefitycompbyACI,
      otherbenefitycompbyACII:
        loading || !userdata.otherbenefitycompbyACII
          ? ''
          : userdata.otherbenefitycompbyACII,
      otherbenefitycompbyACIII:
        loading || !userdata.otherbenefitycompbyACIII
          ? ''
          : userdata.otherbenefitycompbyACIII,
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
      stagetwochange:
        loading || !userdata.stagetwochange ? false : userdata.stagetwochange,
      sectionschanged:
        loading || !userdata.sectionschanged ? '' : userdata.sectionschanged,
      courtorder: loading || !userdata.courtorder ? '' : userdata.courtorder,
      medicalreport:
        loading || !userdata.medicalreport ? '' : userdata.medicalreport,
      abcSummary: loading || !userdata.abcSummary ? '' : userdata.abcSummary,
      utrnumI: loading || !userdata.utrnumI ? '' : userdata.utrnumI,
      utrnumII: loading || !userdata.utrnumII ? '' : userdata.utrnumII,
      utrnumIII: loading || !userdata.utrnumIII ? '' : userdata.utrnumIII,
      docImage: loading || !userdata.docImage ? '' : userdata.docImage,
      doccImage: loading || !userdata.doccImage ? '' : userdata.doccImage,
      postmortem: loading || !userdata.postmortem ? '' : userdata.postmortem,
      victimone: loading || !userdata.victimone ? '' : userdata.victimone,
      victimtwo: loading || !userdata.victimtwo ? '' : userdata.victimtwo,
      victimthree: loading || !userdata.victimthree ? '' : userdata.victimthree,
      victimfour: loading || !userdata.victimfour ? '' : userdata.victimfour,
      victimfive: loading || !userdata.victimfive ? '' : userdata.victimfive,
      victimsix: loading || !userdata.victimsix ? '' : userdata.victimsix,
      victimseven: loading || !userdata.victimseven ? '' : userdata.victimseven,
      victimeight: loading || !userdata.victimeight ? '' : userdata.victimeight,
      accusedone: loading || !userdata.accusedone ? '' : userdata.accusedone,
      accusedtwo: loading || !userdata.accusedtwo ? '' : userdata.accusedtwo,
      accusedthree:
        loading || !userdata.accusedthree ? '' : userdata.accusedthree,
      accusedfour: loading || !userdata.accusedfour ? '' : userdata.accusedfour,
      accusedfive: loading || !userdata.accusedfive ? '' : userdata.accusedfive,
      accusedsix: loading || !userdata.accusedsix ? '' : userdata.accusedsix,
      accusedseven:
        loading || !userdata.accusedseven ? '' : userdata.accusedseven,
      accusedeight:
        loading || !userdata.accusedeight ? '' : userdata.accusedeight
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
    setTypeofatrocityv2(
      loading || !userdata.typeofatrocityv2
        ? null
        : JSON.parse(userdata.typeofatrocityv2)
    );
    setIpcv2(
      loading || !userdata.ipcappliedv2
        ? null
        : JSON.parse(userdata.ipcappliedv2)
    );
    setSectionsv2(
      loading || !userdata.sectionsappliedv2
        ? null
        : JSON.parse(userdata.sectionsappliedv2)
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
    firno,
    returntopolice,
    returntopolicecomment,
    policestation,
    crimeregisterno,
    dateofcrime,
    regdateofcrime,
    victimdetails,
    accuseddetails,
    complainantdetails,
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
    formDataa.append('firno', firno);
    if (user && user.role === 'Police') {
      formDataa.append('returntopolice', false);
    } else {
      formDataa.append('returntopolice', formData.returntopolice);
      formDataa.append('returntopolicecomment', formData.returntopolicecomment);
    }
    formDataa.append('policestation', policestation);
    formDataa.append('crimeregisterno', crimeregisterno);
    formDataa.append('dateofcrime', dateofcrime);
    formDataa.append('regdateofcrime', regdateofcrime);
    formDataa.append('victimdetails', victimdetails);
    formDataa.append('accuseddetails', accuseddetails);
    formDataa.append('complainantdetails', complainantdetails);
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
    editUserdata(match.params.id, formDataa, history);
    for (const value of formDataa.values()) {
      console.log(value);
    }
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
  return (
    <Fragment>
      {userdata === null || loading ? (
        <Spinner />
      ) : userdata === null ? (
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
                      disabled={user && user.role !== 'Police'}
                    />
                    <small className='form-text'>
                      Could be the defined format of serial no
                    </small>
                  </div>
                  <div className='form-group'>
                    FIR No
                    <input
                      type='text'
                      placeholder='FIR No.'
                      name='firno'
                      value={firno}
                      onChange={e => onChange(e)}
                      disabled={user && user.role !== 'Police'}
                    />
                  </div>
                  <div className='form-group'>
                    Name of Police Station
                    <select
                      name='policestation'
                      value={policestation}
                      onChange={e => onChange(e)}
                      disabled={user && user.role !== 'Police'}
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
                      disabled={user && user.role !== 'Police'}
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
                      disabled={user && user.role !== 'Police'}
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
                      disabled={user && user.role !== 'Police'}
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
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Details of Accused
                    <textarea
                      rows='4'
                      cols='2'
                      type='text'
                      placeholder='Details of Accused'
                      name='accuseddetails'
                      value={accuseddetails}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
                      }
                    />
                  </div>
                </div>
                <div className='maindiv'>
                  <div className='form-group'>
                    Details of Complainant
                    <textarea
                      rows='4'
                      cols='2'
                      type='text'
                      placeholder='Details of Complainant'
                      name='complainantdetails'
                      value={complainantdetails}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
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
                      options={options}
                      name='typeofatrocity'
                      value={typeofatrocity}
                      isMulti
                      isSearchable
                      onChange={handleChange}
                      isDisabled={user && user.role !== 'Police'}
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
                      isDisabled={user && user.role !== 'Police'}
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
                      isDisabled={user && user.role !== 'Police'}
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
                      user.role !== 'Police' &&
                      (user && user.role !== 'Data Entry Operator')
                    }
                  />
                </div>
                {/*  */}
                {(sectionsapplied !== null || typeofatrocity !== null) &&
                  ((user && user.role === 'District Collector') ||
                    (user && user.role === 'Asst. Commissioner')) && (
                    <Fragment>
                      <div>
                        <br />
                        <h3>Benefits to be given if Approved at this Stage</h3>
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
                      <div>
                        <h4>Recommendation</h4>
                        {maxCompensation !== 0 ? (
                          <Fragment>
                            <table className='fl-table'>
                              <thead>
                                <tr>
                                  <th>Compensation</th>
                                  <th>First Stage</th>
                                  <th>Second Stage</th>
                                  <th>Third Stage</th>
                                  <th>Extra Details/Benefits</th>
                                </tr>
                              </thead>
                              <tbody style={{ overflow: 'scroll' }}>
                                <tr>
                                  <td>{maxCompensation}</td>
                                  <td>{maxCompI === 0 ? '-' : maxCompI}</td>
                                  <td>{maxCompII === 0 ? '-' : maxCompII}</td>
                                  <td>{maxCompIII === 0 ? '-' : maxCompIII}</td>
                                  <td style={{ textAlign: 'left' }}>
                                    {extrabenefits.map((e1da, i) => (
                                      <li>{extrabenefits[i]}</li>
                                    ))}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </Fragment>
                        ) : (
                          ''
                        )}
                      </div>
                    </Fragment>
                  )}
                {/* {(sectionsapplied !== null || typeofatrocity !== null) &&
                  ((user && user.role === 'District Collector') ||
                    (user && user.role === 'Asst. Commissioner')) && (
                    <div>
                      <br />
                      <h3>Benefits to be given if Approved at this Stage</h3>
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
                  ) && (
                    <div>
                      <h4>Recommendation</h4>
                      {maxCompensation !== 0 ? (
                        <Fragment>
                          <table className='fl-table'>
                            <thead>
                              <tr>
                                <th>Compensation</th>
                                <th>First Stage</th>
                                <th>Second Stage</th>
                                <th>Third Stage</th>
                                <th>Extra Details/Benefits</th>
                              </tr>
                            </thead>
                            <tbody style={{ overflow: 'scroll' }}>
                              <tr>
                                <td>{maxCompensation}</td>
                                <td>{maxCompI === 0 ? '-' : maxCompI}</td>
                                <td>{maxCompII === 0 ? '-' : maxCompII}</td>
                                <td>{maxCompIII === 0 ? '-' : maxCompIII}</td>
                                <td style={{ textAlign: 'left' }}>
                                  {extrabenefits.map((e1da, i) => (
                                    <li>{extrabenefits[i]}</li>
                                  ))}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </Fragment>
                      ) : (
                        ''
                      )}
                    </div>
                  )} */}
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
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
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
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
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
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
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
                        user.role !== 'Police' &&
                        (user && user.role !== 'Data Entry Operator')
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
                        user.role !== 'Asst. Commissioner' &&
                        user &&
                        user.role !== 'Data Entry Operator'
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Other-monetary non benefit for Stage I by Asst. Commisioner
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='otherbenefitycompbyACI'
                      value={otherbenefitycompbyACI}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.role !== 'Asst. Commissioner' &&
                        user &&
                        user.role !== 'Data Entry Operator'
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Other Comments by Asst. Commisioner
                    <textarea
                      type='text'
                      placeholder='Any Other Comments'
                      name='firstbenefitbycommcomment'
                      value={firstbenefitbycommcomment}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.role !== 'Asst. Commissioner' &&
                        user &&
                        user.role !== 'Data Entry Operator'
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
                    disabled={user && user.role !== 'Asst. Commissioner'}
                  />{' '}
                  Yes
                  <Radio
                    type='radio'
                    name='firstbenefitbycommis'
                    checked={firstbenefitbycommis === 'no'}
                    value='no'
                    onChange={e => onChange(e)}
                    disabled={user && user.role !== 'Asst. Commissioner'}
                  />{' '}
                  No
                  <Radio
                    type='radio'
                    name='firstbenefitbycommis'
                    checked={firstbenefitbycommis === 'pending'}
                    value='pending'
                    onChange={e => onChange(e)}
                    disabled={user && user.role !== 'Asst. Commissioner'}
                  />{' '}
                  Pending
                </div>
                <div className='maindiv'>
                  <div className='form-group'>
                    Monetary Compensation for Stage I by District Collector
                    <textarea
                      type='text'
                      placeholder='Amount to be Given'
                      name='monetarycompbyDCI'
                      value={monetarycompbyDCI}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.role !== 'District Collector' &&
                        user &&
                        user.role !== 'Data Entry Operator'
                      }
                    />
                  </div>
                  <div className='form-group'>
                    Other non-monetary benefit for Stage I by District Collector
                    <textarea
                      type='text'
                      placeholder='Give the Reason for Recommendation'
                      name='otherbenefitycompbyDCI'
                      value={otherbenefitycompbyDCI}
                      onChange={e => onChange(e)}
                      disabled={
                        user &&
                        user.role !== 'District Collector' &&
                        user &&
                        user.role !== 'Data Entry Operator'
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
                        user.role !== 'District Collector' &&
                        user &&
                        user.role !== 'Data Entry Operator'
                      }
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
                    disabled={
                      user &&
                      user.role !== 'District Collector' &&
                      user &&
                      user.role !== 'Data Entry Operator'
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
                      user.role !== 'District Collector' &&
                      user &&
                      user.role !== 'Data Entry Operator'
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
                      user.role !== 'District Collector' &&
                      user &&
                      user.role !== 'Data Entry Operator'
                    }
                  />{' '}
                  Keep Pending
                </div>
                {firstbenefitbycollector !== 'no' && (
                  <div className='maindiv'>
                    <div className='form-group'>
                      UTR Number for Money Transfer
                      <input
                        type='text'
                        placeholder='Enter 22 digit UTR Number'
                        name='utrnumI'
                        value={utrnumI}
                        onChange={e => onChange(e)}
                        disabled={user && user.role === 'Asst. Commissioner'}
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
                          user.role !== 'Asst. Commissioner' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                          user.role !== 'District Collector' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                          user.role !== 'District Collector' &&
                          user &&
                          user.role !== 'Data Entry Operator'
                        }
                      />{' '}
                      No
                    </div>
                  </div>
                )}
                {firstbenefitbycollector !== 'no' && (
                  <Fragment>
                    {' '}
                    <hr className='style-two' />
                    <div className='form-group'>
                      Were there any changes in the sections applied?
                      <Radio
                        type='radio'
                        name='sectionschanged'
                        checked={sectionschanged === 'yes'}
                        value='yes'
                        onChange={e => onChange(e)}
                        disabled={user && user.role !== 'Police'}
                      />{' '}
                      Yes
                      <Radio
                        type='radio'
                        name='sectionschanged'
                        checked={sectionschanged === 'no'}
                        value='no'
                        onChange={e => onChange(e)}
                        disabled={user && user.role !== 'Police'}
                      />{' '}
                      No
                    </div>
                    {sectionschanged === 'yes' && (
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
                            isDisabled={user && user.role !== 'Police'}
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
                            isDisabled={user && user.role !== 'Police'}
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
                            isDisabled={user && user.role !== 'Police'}
                          />
                        </div>
                      </div>
                    )}
                    {(sectionsappliedv2 !== null ||
                      typeofatrocityv2 !== null) &&
                      ((user && user.role === 'District Collector') ||
                        (user && user.role === 'Asst. Commissioner')) && (
                        <Fragment>
                          <div>
                            <h3>
                              Since Sections have Changed, Please Verify Whether
                              less or more compensaton were given in Ist stage
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
                          <div>
                            <h4>Recommendation</h4>
                            {maxCompensationv2 !== 0 ? (
                              <Fragment>
                                <table className='fl-table'>
                                  <thead>
                                    <tr>
                                      <th>Compensation</th>
                                      <th>First Stage</th>
                                      <th>Second Stage</th>
                                      <th>Third Stage</th>
                                      <th>Extra Details/Benefits</th>
                                    </tr>
                                  </thead>
                                  <tbody style={{ overflow: 'scroll' }}>
                                    <tr>
                                      <td>{maxCompensationv2}</td>
                                      <td>{maxCompI === 0 ? '-' : maxCompI}</td>
                                      <td>
                                        {maxCompII === 0 ? '-' : maxCompII}
                                      </td>
                                      <td>
                                        {maxCompIII === 0 ? '-' : maxCompIII}
                                      </td>
                                      <td style={{ textAlign: 'left' }}>
                                        {extrabenefitsv2.map((e1da, i) => (
                                          <li>{extrabenefitsv2[i]}</li>
                                        ))}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </Fragment>
                            ) : (
                              ''
                            )}
                          </div>
                        </Fragment>
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
                                  return {
                                    ...prevState,
                                    medicalreport: vall
                                  };
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
                          disabled={user && user.role !== 'Police'}
                        />
                      </div>
                      <div className='form-group'>
                        <Paper className={classes.root}>
                          Upload ChargeSheet File <br />
                          <small>
                            Note : File Size Should not exceed 6 Mb{'  '}
                          </small>
                          <br />{' '}
                          <small>Upload jpeg/pdf file here : {'   '}</small>
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
                            user.role !== 'Police' &&
                            (user && user.role !== 'Data Entry Operator')
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
                            user.role !== 'Police' &&
                            (user && user.role !== 'Data Entry Operator')
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
                            user.role !== 'Police' &&
                            (user && user.role !== 'Data Entry Operator')
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
                            user.role !== 'Police' &&
                            (user && user.role !== 'Data Entry Operator')
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
                            user.role !== 'Asst. Commissioner' &&
                            user &&
                            user.role !== 'Data Entry Operator'
                          }
                        />
                      </div>
                      <div className='form-group'>
                        Other non-monetary benefit for Stage II by Asst.
                        Commisioner
                        <textarea
                          type='text'
                          placeholder='Give the Reason for Recommendation'
                          name='otherbenefitycompbyACII'
                          value={otherbenefitycompbyACII}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.role !== 'Asst. Commissioner' &&
                            user &&
                            user.role !== 'Data Entry Operator'
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
                            user.role !== 'Asst. Commissioner' &&
                            user &&
                            user.role !== 'Data Entry Operator'
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
                          user.role !== 'Asst. Commissioner' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                          user.role !== 'Asst. Commissioner' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                          user.role !== 'Asst. Commissioner' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                            user.role !== 'District Collector' &&
                            user &&
                            user.role !== 'Data Entry Operator'
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
                            user.role !== 'District Collector' &&
                            user &&
                            user.role !== 'Data Entry Operator'
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
                            user.role !== 'District Collector' &&
                            user &&
                            user.role !== 'Data Entry Operator'
                          }
                        />
                      </div>
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
                        disabled={
                          user &&
                          user.role !== 'District Collector' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                          user.role !== 'District Collector' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                          user.role !== 'District Collector' &&
                          user &&
                          user.role !== 'Data Entry Operator'
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
                            (user && user.role === 'Asst. Commissioner') ||
                            (user && user.role !== 'Data Entry Operator')
                          }
                        />
                      </div>
                      <div className='form-group'>
                        Details of Non Monetary Benefits given for Stage II by
                        Asst. Commisioner
                        <textarea
                          type='text'
                          placeholder='Amount Given'
                          name='benefitsgivenbyACII'
                          value={benefitsgivenbyACII}
                          onChange={e => onChange(e)}
                          disabled={
                            user &&
                            user.role !== 'Asst. Commissioner' &&
                            user &&
                            user.role !== 'Data Entry Operator'
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
                            user.role !== 'District Collector' &&
                            user &&
                            user.role !== 'Data Entry Operator'
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
                            user.role !== 'District Collector' &&
                            user &&
                            user.role !== 'Data Entry Operator'
                          }
                        />{' '}
                        No
                      </div>
                    </div>
                    <br />
                    {firstbenefitbycollector !== 'no' && (
                      <div className='maindiv'>
                        <div className='form-group'>
                          Monetary Compensation for Stage II given by Asst.
                          Commisioner
                          <input
                            type='text'
                            placeholder='Amount Given'
                            name='benefitsgivenbyACII'
                            value={benefitsgivenbyACII}
                            onChange={e => onChange(e)}
                            disabled={
                              user && user.role !== 'Asst. Commissioner'
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
                              user && user.role !== 'District Collector'
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
                              user && user.role !== 'District Collector'
                            }
                          />{' '}
                          No
                        </div>
                      </div>
                    )}
                  </Fragment>
                )}
                <br />
                {!dpmurderIII &&
                  !dpacidIII &&
                  !dpdisabilityIII &&
                  firstbenefitbycollector !== 'no' &&
                  secondbenefitbycollector !== 'no' && (
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
                            disabled={user && user.role !== 'Police'}
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
                            disabled={user && user.role !== 'Police'}
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
                            disabled={user && user.role !== 'Police'}
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
                              user.role !== 'Police' &&
                              (user && user.role !== 'Data Entry Operator')
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
                              user.role !== 'Police' &&
                              (user && user.role !== 'Data Entry Operator')
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
                              user.role !== 'Police' &&
                              (user && user.role !== 'Data Entry Operator')
                            }
                          />{' '}
                          Keep Pending
                        </div>
                      </div>
                      <div className='maindiv'>
                        <div className='form-group'>
                          Monetary Compensation for Stage III by Asst.
                          Commisioner
                          <textarea
                            type='text'
                            placeholder='Give the Reason for Recommendation'
                            name='monetarycompbyACIII'
                            value={monetarycompbyACIII}
                            onChange={e => onChange(e)}
                            disabled={
                              user && user.role !== 'Asst. Commissioner'
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
                              user && user.role !== 'Asst. Commissioner'
                            }
                          />
                        </div>
                        <div className='form-group'>
                          Other Comments by Asst. Commisioner
                          <input
                            type='text'
                            placeholder='Any Other Comments here'
                            name='thirdbenefitbycommcomment'
                            value={thirdbenefitbycommcomment}
                            onChange={e => onChange(e)}
                            disabled={
                              user && user.role !== 'Asst. Commissioner'
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
                          disabled={user && user.role !== 'Asst. Commissioner'}
                        />{' '}
                        Should be given
                        <Radio
                          type='radio'
                          name='thirdbenefitbycommis'
                          checked={thirdbenefitbycommis === 'no'}
                          value='no'
                          onChange={e => onChange(e)}
                          disabled={user && user.role !== 'Asst. Commissioner'}
                        />{' '}
                        Should not be given
                        <Radio
                          type='radio'
                          name='thirdbenefitbycommis'
                          checked={thirdbenefitbycommis === 'pending'}
                          value='pending'
                          onChange={e => onChange(e)}
                          disabled={user && user.role !== 'Asst. Commissioner'}
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
                              user && user.role !== 'District Collector'
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
                              user && user.role !== 'District Collector'
                            }
                          />
                        </div>
                        <div className='form-group'>
                          Other Comments by District Collector
                          <input
                            type='text'
                            placeholder='Any Other Comments here'
                            name='thirdbenefitbycollectorcomment'
                            value={thirdbenefitbycollectorcomment}
                            onChange={e => onChange(e)}
                            disabled={
                              user && user.role !== 'District Collector'
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
                          disabled={user && user.role !== 'District Collector'}
                        />{' '}
                        Should be given
                        <Radio
                          type='radio'
                          name='thirdbenefitbycollector'
                          checked={thirdbenefitbycollector === 'no'}
                          value='no'
                          onChange={e => onChange(e)}
                          disabled={user && user.role !== 'District Collector'}
                        />{' '}
                        Should not be given
                        <Radio
                          type='radio'
                          name='thirdbenefitbycollector'
                          checked={thirdbenefitbycollector === 'pending'}
                          value='pending'
                          onChange={e => onChange(e)}
                          disabled={user && user.role !== 'District Collector'}
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
                              user && user.role === 'Asst. Commissioner'
                            }
                          />
                        </div>
                        <div className='form-group'>
                          Details of Non Monetary Benefits given for Stage III
                          by Asst. Commisioner
                          <textarea
                            type='text'
                            placeholder='Amount Given'
                            name='benefitsgivenbyACIII'
                            value={benefitsgivenbyACIII}
                            onChange={e => onChange(e)}
                            disabled={
                              user && user.role !== 'Asst. Commissioner'
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
                              user && user.role !== 'District Collector'
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
                              user && user.role !== 'District Collector'
                            }
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
                        <br />
                        Select if Every Action for this Case has been Taken{' '}
                        <br /> Note : You Won't be able to make any changes if
                        you select "Yes" and Click the Submit Button
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
                {user && user.role === 'Asst. Commissioner' && (
                  <Fragment>
                    <div className='form-group'>
                      Comment for Return/Re-Examination of this Case
                      <textarea
                        type='text'
                        placeholder='Reason for re-examination of this Case '
                        name='returntopolicecomment'
                        value={returntopolicecomment}
                        onChange={e => onChange(e)}
                        disabled={
                          user &&
                          user.role !== 'Asst. Commissioner' &&
                          user &&
                          user.role !== 'Data Entry Operator'
                        }
                      />
                    </div>
                    <Button
                      variant='contained'
                      color='secondary'
                      className={classes.button}
                      onClick={e => (
                        (formData.returntopolice = true),
                        console.log(returntopolice),
                        onSubmit(e)
                      )}
                    >
                      Return
                    </Button>
                    or
                  </Fragment>
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
