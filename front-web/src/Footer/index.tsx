import React from 'react';
import './styles.css';
import { ReactComponent as YoutubeIcon } from './Youtube.svg';
import { ReactComponent as InstagramIcon } from './Instagram.svg';
import { ReactComponent as LinkedinIcon } from './Linkedin.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="www.youtube.com" target="_new">
          <YoutubeIcon />
        </a>
        <a href="www.instagram.com" target="_new">
          <InstagramIcon />
        </a>
        <a href="www.linkedin.com" target="_new">
          <LinkedinIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
