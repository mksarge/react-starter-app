import React from 'react';
import { Link } from 'react-router';
import Corner from './Corner';
import css from './Header.css';
import config from '../../config';

const Header = () => (
  <div className={[css.header, css.header2].join(' ')}>
    <Corner link={config.github} />
    <div className={css.title}>
      <Link to="/">
        <img className={css.logo} src={config.logo} alt="" />
        {config.name}
      </Link>
    </div>
  </div>);

export default Header;
