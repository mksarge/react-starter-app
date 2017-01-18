/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import css from './Header.css';

const Header = (props) => (
  <div className={css.container}>
    <div className={css.text}>
      <Link to="/">{props.header}</Link>
    </div>
  </div>
);

Header.propTypes = {
  header: PropTypes.string,
};

Header.defaultProps = {
  header: '',
};

export default Header;
