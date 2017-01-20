import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Corner from './Corner';
import css from './Header.css';
import config from '../../env';
import { getRootPath } from '../../utils';

const Header = (props) => {
  const path = getRootPath();
  return (
    <div className={path === 'home' ? [css.header, css.header2].join(' ') : css.header}>
      {path === 'home' && (<Corner link={config.github} />)}
      <div className={css.title}>
        <Link to="/">
          {path === 'home' && (<img className={css.logo} src="react-logo.png" alt="" />)}
          {props.text}
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: '',
};

export default Header;
