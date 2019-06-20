import React, { Fragment, useEffect } from 'react';

const RecommUser = ({ userdata: { sectionsapplied, typeofatrocity } }) => {
  var arrr = JSON.parse(sectionsapplied);
  var tarr = JSON.parse(typeofatrocity);
  // console.log(arrr);

  // console.log(typeof JSON.parse(sectionsapplied));

  return (
    <div>
      <div>
        {arrr.map((sectionn, i) => (
          <div key={i}>
            <h5>Compensation Due to section {i + 1} </h5>
            Total Compensation amount to be given : {sectionn.compensation}{' '}
            {sectionn.extradetails}
            <br />
            First Stage Compensation Amount :{' '}
            {sectionn.compensation * sectionn.firststage} <br />
            Second Stage Compensation Amount :
            {sectionn.compensation * sectionn.secondstage} <br />
            Third Stage Compensation Amount :
            {sectionn.compensation * sectionn.thirdstage} <br />
          </div>
        ))}
      </div>
      <div>
        {tarr.map((tatro, i) => (
          <div key={i}>
            <h5>Compensation Due to section {i + 1} </h5>
            Total Compensation amount to be given : {tatro.compensation}{' '}
            {tatro.extradetails}
            <br />
            First Stage Compensation Amount :{' '}
            {tatro.compensation * tatro.firststage} <br />
            Second Stage Compensation Amount :
            {tatro.compensation * tatro.secondstage} <br />
            Third Stage Compensation Amount :
            {tatro.compensation * tatro.thirdstage} <br />
          </div>
        ))}
      </div>
    </div>
  );
};

RecommUser.propTypes = {};

export default RecommUser;
