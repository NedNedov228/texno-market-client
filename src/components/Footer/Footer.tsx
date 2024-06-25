import React from 'react';
import './Footer.scss';

import applePay from '../../assets/Footer/icon-apple-pay.svg';
import googlePay from '../../assets/Footer/icon-google-pay.svg';
import mastercard from '../../assets/Footer/mastercard.svg';
import payPal from '../../assets/Footer/icon-pay-pal.svg';
import visa from '../../assets/Footer/visa.svg';


const Footer: React.FC = () => {
  return (
    // <footer className="footer">
    //   <div className="container">
    //   <div className="footer__content">
    //     <p>&copy; 2024 XeCore All Rights Reserved.</p>
    //     <ul className="footer__links">
    //       <li><a href="/terms">Terms of Service</a></li>
    //       <li><a href="/privacy">Privacy Policy</a></li>
    //       <li><a href="/contact">Contact Us</a></li>
    //     </ul>
    //   </div>
    //   </div>
    // </footer>

    <footer className="footer">
  <div className="footer__container">
  <h3 className='footer__col-title'>Techno Market</h3>
    <div className="footer__columns">
      <div className="footer__col">
        <h3 className="footer__col-title">
          <i data-feather="shopping-bag"></i> <span>About us</span></h3>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
              Rentcars
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
              Privacy Policy
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
              Terms and Conditions
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
              Code of Conduct
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
              Cookie Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__col">
        <h3 className="footer__col-title">
          <i data-feather="share-2"></i> <span>Social Media</span></h3>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                <i data-feather="youtube"></i><span>Youtube</span>
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                <i data-feather="facebook"></i><span>Facebook</span>
                
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="" className="footer__nav-link">
                <i data-feather="instagram"></i><span>Instagram</span>
                
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__col">
        <h3 className="footer__col-title">
          <i data-feather="send"></i> <span>Contact</span></h3>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a href="mailto:nidschat.ahmedli@gmail.com" className="footer__nav-link">
                nidschat.ahmedli@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="footer__payment">
      <h3 className="footer__col-title">
      <span>Payment Methods</span></h3>
      <div className="payment">
      <nav >
          <ul className="footer__nav-payments">
            <li className="footer__nav-item">
              <a href="https://mastercard.com" className="footer__nav-link">
              <img src={mastercard} alt="mastercard" />
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="https://visa.com" className="footer__nav-link">
              <img src={visa} alt="visa" />
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="https://www.apple.com/apple-pay/" className="footer__nav-link">
              <img src={applePay} alt="applePay" />
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="https://pay.google.com/about/" className="footer__nav-link">
              <img src={googlePay} alt="googlePay" />
              </a>
            </li>
            <li className="footer__nav-item">
              <a href="https://www.paypal.com" className="footer__nav-link">
              <img src={payPal} alt="payPal" />
              </a>
            </li>
            </ul>
            </nav>


      </div>
    </div>

      <div className="footer__copyrights">
        <p>&copy; 2024 XeCore All Rights Reserved.</p>
      </div>
  </div>
</footer>
  );
};

export default Footer;
