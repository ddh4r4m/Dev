import React, { Fragment, useEffect } from 'react';
import './mytable.css';

const RecommUser = ({ userdata: { sectionsapplied, typeofatrocity } }) => {
  var arrr = JSON.parse(sectionsapplied);
  var tarr = JSON.parse(typeofatrocity);
  var maxCompensation = 0;
  var secttion = '';

  // console.log(arrr);

  // console.log(typeof JSON.parse(sectionsapplied));
  tarr.map((patro, i) => {
    if (patro.compensation > maxCompensation) {
      maxCompensation = patro.compensation;
      secttion = patro.label;
    }
  });
  arrr.map((aatro, i) => {
    if (aatro.compensation > maxCompensation) {
      maxCompensation = aatro.compensation;
      secttion = aatro.label;
    }
  });

  // console.log(secttion);

  return (
    <div>
      <div className='mytablee' style={{ padding: '6% 6%' }}>
        <h1>MAX COMPENSATION AMOUNT : {maxCompensation}</h1>
        <h1>REASON : {secttion}</h1>
      </div>
      <div>
        {arrr.map((sectionn, i) => (
          <div key={i} className='mytablee'>
            <h5>Compensation Due to section : {sectionn.label} </h5>
            <p>
              {' '}
              Total Compensation amount to be given : {
                sectionn.compensation
              }{' '}
              {sectionn.extradetails}
            </p>
            <p>
              {' '}
              First Stage Compensation Amount :{' '}
              {sectionn.compensation * sectionn.firststage} <br />
            </p>
            <p>
              {' '}
              Second Stage Compensation Amount :
              {sectionn.compensation * sectionn.secondstage} <br />
            </p>
            <p>
              {' '}
              Third Stage Compensation Amount :
              {sectionn.compensation * sectionn.thirdstage} <br />
            </p>
          </div>
        ))}
      </div>
      <div>
        {tarr.map((tatro, i) => (
          <div key={i} className='mytable'>
            <h5>Compensation Due to : {tatro.label} </h5>
            <p>
              {' '}
              Total Compensation amount to be given : {tatro.compensation}{' '}
              {tatro.extradetails}
            </p>
            <p>
              {' '}
              First Stage Compensation Amount :{' '}
              {tatro.compensation * tatro.firststage} <br />
            </p>
            <p>
              {' '}
              Second Stage Compensation Amount :
              {tatro.compensation * tatro.secondstage} <br />
            </p>
            <p>
              {' '}
              Third Stage Compensation Amount :
              {tatro.compensation * tatro.thirdstage} <br />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

RecommUser.propTypes = {};

export default RecommUser;
