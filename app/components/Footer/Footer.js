import React from 'react';
import css from './Footer.css';

const Footer = () => (
  <footer className={css.footer}>
    <p>
      This site is on&nbsp;
      <a href="https://github.com/">GitHub</a>.
      <br />
      <a href="https://github.com/">Docs</a>
      &nbsp;&middot;&nbsp;
      <a href="https://github.com/">Report an issue</a>
      &nbsp;&middot;&nbsp;
      <a href="https://github.com/">Contribute</a>
    </p>
  </footer>
);

export default Footer;
