import React from 'react';
import { Link } from 'react-router';
import css from './Navbar.css';
import { getRootPath } from '../../utils';

const links = [
  { path: '/', name: 'home' },
  { path: '/docs', name: 'docs' },
  { path: '/blog', name: 'blog' },
];

const renderLinks = () => links.map((link) => {
  const currentPath = getRootPath();
  return (<Link
    key={link.name}
    className={css.navblock}
    to={link.path}
    style={currentPath === link.name
      ? { background: '#236', color: 'white' }
      : { background: 'none', color: '#24b' }
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
