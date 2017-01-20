import React from 'react';
import css from './Footer.css';

const Footer = () => (
  <footer className={css.footer}>
    <p>
      React Starter App is on&nbsp;
      <a href="https://github.com/mksarge/react-starter-app">GitHub</a>.
      <br />
      <a href="https://react-starter-app.firebaseapp.com/docs">Docs</a>
      &nbsp;&middot;&nbsp;
      <a href="https://github.com/mksarge/react-starter-app/issues">Report an issue</a>
      &nbsp;&middot;&nbsp;
      <a href="https://github.com/mksarge/react-starter-app/fork">Contribute</a>
    </p>
  </footer>
);

export default Footer;
