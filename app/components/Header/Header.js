import React from 'react';
import { Link } from 'redux-json-router';
import Corner from './Corner';
import css from './Header.css';
import config from '../../../config/config.json';
import reactLogo from './react.svg';

const Header = () => (
  <div className={css.header}>
    <Corner link={config.github} />
    <div className={css.title}>
      <Link to="/">
        <img className={css.logo} src={reactLogo} alt="" />
        {config.name}
      </Link>
    </div>
  </div>);

export default Header;
