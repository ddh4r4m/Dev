import React, { Fragment, useEffect } from 'react';
import './mytable.css';

const RecommUser = ({ deouserdata: { sectionsapplied, typeofatrocity } }) => {
  var arrr = JSON.parse(sectionsapplied);
  var tarr = JSON.parse(typeofatrocity);
  var maxCompensation = 0;
  var secttion = '';

  // console.log(arrr);

  // console.log(typeof JSON.parse(sectionsapplied));
  if (tarr !== null) {
    tarr.map((patro, i) => {
      if (patro.compensation > maxCompensation) {
        maxCompensation = patro.compensation;
        secttion = patro.label;
      }
    });
  }
  if (arrr !== null) {
    arrr.map((aatro, i) => {
      if (aatro.compensation > maxCompensation) {
        maxCompensation = aatro.compensation;
        secttion = aatro.label;
      }
    });
  }
  // console.log(secttion);

  return tarr !== null && arrr !== null ? (
    <Fragment>
      <div>
        <div className='mytablee' style={{ padding: '6% 6%' }}>
          <h1>MAX COMPENSATION AMOUNT : {maxCompensation}</h1>
          <h1>REASON : {secttion}</h1>
        </div>
        {/* <div>
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
      </div> */}
        {/* <div>
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
      </div> */}
        <div>
          {(arrr !== null || typeofatrocity !== null) && (
            <div>
              <table className='fl-table'>
                <thead>
                  <tr>
                    <th>Section</th>
                    <th>Compensation Amount</th>
                    <th>First Stage</th>
                    <th>Second Stage</th>
                    <th>Third Stage</th>
                    <th>Extra Details/Benefits</th>
                  </tr>
                </thead>
                <tbody style={{ overflow: 'scroll' }}>
                  {arrr !== null ? (
                    arrr.map((sectionn, i) => (
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
                              : sectionn.compensation * sectionn.firststage}
                          </td>
                          <td>
                            {sectionn.secondstage <= 0
                              ? '-'
                              : sectionn.compensation * sectionn.secondstage}
                          </td>
                          <td>
                            {sectionn.thirdstage <= 0
                              ? '-'
                              : sectionn.compensation * sectionn.thirdstage}
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
                  {tarr !== null ? (
                    tarr.map((sectionn, i) => (
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
                              : sectionn.compensation * sectionn.firststage}
                          </td>
                          <td>
                            {sectionn.secondstage <= 0
                              ? '-'
                              : sectionn.compensation * sectionn.secondstage}
                          </td>
                          <td>
                            {sectionn.thirdstage <= 0
                              ? '-'
                              : sectionn.compensation * sectionn.thirdstage}
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
        </div>
      </div>
    </Fragment>
  ) : (
    <h1>No Data</h1>
  );
};

RecommUser.propTypes = {};

export default RecommUser;
