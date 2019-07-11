import React, { Fragment } from 'react';

const Reference = () => {
  return (
    <Fragment>
      <div className='container'>
        <h3>REFERENCES</h3>
        <br />
        <ul style={{ listStyleType: 'disc' }}>
          <li>
            <a
              href='http://socialjustice.nic.in/ViewData/Details?mid=1242&catID=113'
              target='_blank'
            >
              The Scheduled Castes and the Scheduled Tribes (Prevention of
              Atrocities) Act, 1989 and its Amendment
            </a>
          </li>
          <li>
            <a
              href='https://indiacode.nic.in/handle/123456789/2263'
              target='_blank'
            >
              The Indian Penal Code, 1860
            </a>
          </li>
          <li>
            <a href='http://egazette.nic.in' target='_blank'>
              The Gazette of India
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Reference;
