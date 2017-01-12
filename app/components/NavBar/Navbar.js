import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import css from './Navbar.css';

const HighlightedLink = (props) => {
  const path = browserHistory.getCurrentLocation().pathname;
  const path2 = path.slice(1);
  const index = path2.indexOf('/');
  let path3;
  if (index !== -1) {
    path3 = path2.slice(0, index);
  } else {
    path3 = path2;
  }
  const match = props.to === `/${path3}`;
  return (
    <Link
      className={css.navblock}
      style={{
        background: match ? '#a0c0ff' : 'none',
        color: match ? 'white' : '#303080',
      }}
      to={props.to}
    >
      {props.title}
    </Link>
  );
};

HighlightedLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
};

HighlightedLink.defaultProps = {
  to: '',
  title: '',
};

const Navbar = () => (
  <div className={css.navbar} >
    <HighlightedLink to="/" title="Home" />&nbsp;
    <HighlightedLink to="/docs" title="Docs" />&nbsp;
    <HighlightedLink to="/blog" title="Blog" />&nbsp;
  </div>
);
export default Navbar;
