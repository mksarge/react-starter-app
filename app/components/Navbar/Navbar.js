import React from 'react';
import { Link } from 'react-router';
import css from './Navbar.css';
import config from '../../config';
import { getRootPath } from '../../utils';

const renderLinks = () => config.routes.map((link) => {
  const currentPath = getRootPath();
  return (<Link
    key={link.name}
    className={css.navblock}
    to={link.path}
    style={currentPath === link.name
      ? { borderBottom: '4px solid #67f', color: '#67f' }
      : { }
    }
  >{link.name}
  </Link >);
});

const Navbar = () => (
  <div className={css.navbar} >
    {renderLinks()}
  </div>
);

export default Navbar;
