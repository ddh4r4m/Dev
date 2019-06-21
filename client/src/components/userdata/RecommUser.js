import React, { Fragment, useEffect } from 'react';
import './mytable.css';

const RecommUser = ({ userdata: { sectionsapplied, typeofatrocity } }) => {
  var arrr = JSON.parse(sectionsapplied);
  var tarr = JSON.parse(typeofatrocity);
  var maxCompensation;

  // console.log(arrr);

  // console.log(typeof JSON.parse(sectionsapplied));

  return (
    <div>
      <div>
        {arrr.map((sectionn, i) => (
          <div key={i} className='mytablee'>
            <h5>Compensation Due to section {i + 1} </h5>
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
            <h5>Compensation Due to section {i + 1} </h5>
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
