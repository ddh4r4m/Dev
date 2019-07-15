import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer
      className='footer-distributed'
      style={{ marginBottom: '-30px', marginTop: '0px' }}
    >
      px
      <div className='footer-left'>
        <h3>
          Atrocity<span>Act</span>
        </h3>

        <p className='footer-links'>
          <a href='#!'>Home</a>·<a href='#!'>Blog</a>
          <a href='#!'>About</a>·<a href='#!'>Contact</a>
        </p>

        <p className='footer-company-name'>
          Social Welfare Department &copy; 2018
        </p>
      </div>
      <div className='footer-center'>
        <div>
          <i className='fa fa-map-marker' />
          <p>
            <span>Dhule</span> Maharashtra, India
          </p>
        </div>

        <div>
          <i className='fa fa-phone' />
          <p>+1 555 123456</p>
        </div>

        <div>
          <i className='fa fa-envelope' />
          <p>
            <a href='mailto:support@company.com'>support@atrocityact.com</a>
          </p>
        </div>
      </div>
      <div className='footer-right'>
        <p className='footer-company-about'>
          <span>About the Act</span>
          The Scheduled Castes and Tribes (Prevention of Atrocities) Act, 1989
          is an Act of the Parliament of India enacted to prevent atrocities
          against scheduled castes and scheduled tribes. The Act is popularly
          known as the SC/ST Act, POA, the Prevention of Atrocities Act, or
          simply the Atrocities Act.
        </p>

        <div className='footer-icons'>
          <a href='#!'>
            <i className='fab fa-facebook' />
          </a>
          <a href='#!'>
            <i className='fab fa-twitter' />
          </a>
          <a href='#!'>
            <i className='fab fa-linkedin' />
          </a>
          <a href='#!'>
            <i className='fab fa-github' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
