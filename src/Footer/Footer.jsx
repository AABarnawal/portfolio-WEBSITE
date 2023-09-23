import React from 'react';
import git from '../Components/github.png';
import linke from '../Components/linkedin.png';
import tel from '../Components/telegram.png';
import './FooterStyle.css'

const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p>Email: kr.ankit.1711@gmail.com</p>
            </div>
            <div className="social-media">
              <a href="https://t.me/AABarnawal" target="_blank" rel="noopener noreferrer">
                <img className='im' src={tel} />
              </a>
              <a href="https://github.com/AABarnawal" target="_blank" rel="noopener noreferrer">
              <img className='im' src={git} />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-5a56071a7" target="_blank" rel="noopener noreferrer">
              <img className='im' src={linke} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; {new Date().getFullYear()} Ankit Kumar. All Rights Reserved.</p>
            </div>
            <div className="col-md-6">
              <p>Site Information: Built with React and Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
