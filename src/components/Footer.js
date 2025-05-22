import React from 'react';
import './Footer.css';

function Footer() {
  var year = new Date().getFullYear()
  return (
    <div className='footer-container'>
      <div class='social-icons'>
          <a
            class='social-icon-link github'
            href="https://github.com/jmrossi98"
            target='_blank'
            aria-label='Github'
          >
            <i class='fab fa-github' />
          </a>
          <a
            class='social-icon-link linkedin'
            href="https://linkedin.com/in/jakob-rossi"
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </a>
          <a
            class='social-icon-link steam'
            href="https://steamcommunity.com/profiles/76561198176095826/"
            target='_blank'
            aria-label='Steam'
          >
            <i class='fab fa-steam' />
          </a>
        </div>
        <small class='website-rights'>JAKOB ROSSI © {year}</small>
      </div>
  );
}

export default Footer;
