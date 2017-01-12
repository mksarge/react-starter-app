/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import css from './Header.css';

function redirect(e) {
  e.preventDefault();
  browserHistory.push('/');
}

const Header = (props) => (
  <div className={css.header} onClick={redirect} >
    <h1>{props.title}</h1>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};


export default Header;
