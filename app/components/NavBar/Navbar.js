import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import css from './Navbar.css';
import { getRootPath } from '../../utils';

const HighlightedLink = (props) => {
  // check if the root url matches one of the three nav links
  const match = props.title === getRootPath();

  // if url matches, highlight the link
  const style = {
    background: match ? '#236' : 'none',
    color: match ? 'white' : '#24b',
  };

  return <Link className={css.navblock} to={props.to} style={style}>{props.title}</Link>;
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
    <HighlightedLink to="/" title="home" />&nbsp;
    <HighlightedLink to="/docs" title="docs" />&nbsp;
    <HighlightedLink to="/blog" title="blog" />&nbsp;
  </div>
);
export default Navbar;
