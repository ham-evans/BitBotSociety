import React from 'react'; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import footerVid from '../images/footerImage.mp4'

import "./Footer.css";

export default function Footer () {
  return (
    <div className="footer"> 
      <div className='footer__container'>
        <div className='footer__first'>

        </div>
        <div className='footer__second'>
          <video loop autoPlay muted>
            <source src={footerVid} type="video/mp4" />
          </video>
        </div>
        <div className='footer__third'>
          <div className='footer__links'>
            <a href='https://twitter.com/BitBotSociety' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='https://discord.com/invite/kG24rk4cMD' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
          </div>
          <br />
          <p>2022 BitBot Society LLC</p>
          <Link
            to="terms-and-conditions"
            className="nav-links"
          >
            Terms & Conditions
          </Link>
          <Link
            smooth 
            to="ownership"
            className="nav-links"
          >
            Ownership
          </Link>
        </div>
      </div>
    </div>
  );
}
