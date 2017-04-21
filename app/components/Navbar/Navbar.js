import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-json-router';
import css from './Navbar.css';
import config from '../../../config/config.json';

const Navbar = ({ router }) => (
  <div className={css.navbar} >
    {config.navigation.map((link) => (
      <Link
        key={link.name}
        className={css.navblock}
        to={link.path}
        style={`/${router.paths[0]}` === link.path
          ? { background: '#fff', color: '#67f', borderRadius: '5px 5px 0 0' }
          : {}
        }
      >{link.name}</Link>
    ))}
  </div>
);

Navbar.propTypes = {
  router: PropTypes.object, // eslint-disable-line
};

export default connect(({ router }) => ({ router }))(Navbar);
