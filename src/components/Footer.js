import React from 'react';
import './Footer.css';

function Footer() {
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
            class='social-icon-link facebook'
            href="https://www.facebook.com/jakob.rossi"
            target='_blank'
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </a>
          <a
            class='social-icon-link instagram'
            href="https://www.instagram.com/jay_crossin"
            target='_blank'
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </a>
          <a
            class='social-icon-link twitter'
            href="https://twitter.com/jay_crossin"
            target='_blank'
            aria-label='Twitter'
          >
            <i class='fab fa-twitter' />
          </a>
        </div>
        <small class='website-rights'>JAKOB ROSSI © 2022</small>
      </div>
  );
}

export default Footer;
