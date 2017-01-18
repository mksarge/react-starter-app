import React from 'react';
import css from './Footer.css';
import { html } from './Footer.md';

const Footer = () => (
  <footer className={css.footer}>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </footer>
);

export default Footer;
