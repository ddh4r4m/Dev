import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className='footer' style={{ marginBottom: '-150px' }}>
      <div className='container bottom_border'>
        <div className='row'>
          <div className=' col-sm-4 col-md col-sm-4  col-12 col'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Find us</h5>
            {/* <!--headin5_amrc--> */}
            <p className='mb10'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              <i className='fa fa-location-arrow' /> 9878/25 sec 9 rohini 35{' '}
            </p>
            <p>
              <i className='fa fa-phone' /> +91-9999878398{' '}
            </p>
            <p>
              <i className='fa fa fa-envelope' /> info@example.com{' '}
            </p>
          </div>

          <div className=' col-sm-4 col-md  col-6 col'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>
            {/* <!--headin5_amrc--> */}
            <ul className='footer_ul_amrc'>
              <li>
                <a href='https://dhule.gov.in/'>Image Rectoucing</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Clipping Path</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Hollow Man Montage</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Ebay & Amazon</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Hair Masking/Clipping</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Image Cropping</a>
              </li>
            </ul>
            {/* <!--footer_ul_amrc ends here--> */}
          </div>

          <div className=' col-sm-4 col-md  col-6 col'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Quick links</h5>
            {/* <!--headin5_amrc--> */}
            <ul className='footer_ul_amrc'>
              <li>
                <a href='https://dhule.gov.in/'>Remove Background</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Shadows & Mirror Reflection</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Logo Design</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Vectorization</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Hair Masking/Clipping</a>
              </li>
              <li>
                <a href='https://dhule.gov.in/'>Image Cropping</a>
              </li>
            </ul>
            {/* <!--footer_ul_amrc ends here--> */}
          </div>
        </div>
      </div>

      <div className='container'>
        <ul className='foote_bottom_ul_amrc'>
          <li>
            <a href='http://webenlance.com'>Home</a>
          </li>
          <li>
            <a href='http://webenlance.com'>About</a>
          </li>
          <li>
            <a href='http://webenlance.com'>Services</a>
          </li>
          <li>
            <a href='http://webenlance.com'>Pricing</a>
          </li>
          <li>
            <a href='http://webenlance.com'>Blog</a>
          </li>
          <li>
            <a href='http://webenlance.com'>Contact</a>
          </li>
        </ul>
        {/* <!--foote_bottom_ul_amrc ends here--> */}
        <p className='text-center'>
          Copyright @2017 | Designed With by <a href='#'>Your Company Name</a>
        </p>

        <ul className='social_footer_ul'>
          <li>
            <a href='http://webenlance.com'>
              <i className='fab fa-facebook-f' />
            </a>
          </li>
          <li>
            <a href='http://webenlance.com'>
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li>
            <a href='http://webenlance.com'>
              <i className='fab fa-linkedin' />
            </a>
          </li>
          <li>
            <a href='http://webenlance.com'>
              <i className='fab fa-instagram' />
            </a>
          </li>
        </ul>
        {/* <!--social_footer_ul ends here--> */}
      </div>
    </footer>
  );
};

export default Footer;
