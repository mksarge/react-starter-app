import React from 'react';
import css from './Footer.css';
import config from '../../config';

const Footer = () => (
  <footer className={css.footer}>
    <p>
      React Starter App is on&nbsp;
      <a href={config.github}>GitHub</a>.
      <br />
      <a href="/docs">Docs</a>
      &nbsp;&middot;&nbsp;
      <a href={`${config.github}/issues`}>Report an issue</a>
      &nbsp;&middot;&nbsp;
      <a href={`${config.github}/fork`}>Contribute</a>
    </p>
  </footer>
);

export default Footer;
