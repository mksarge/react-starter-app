import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import css from './Navbar.css';

export const getRootPath = () => {
  // get url pathname without leading '/'
  const path = browserHistory.getCurrentLocation().pathname.slice(1);

  // check if there is another '/' in the url
  const index = path.indexOf('/');

  // if true, take only the first portion
  return (index !== -1) ? path.slice(0, index) : path;
};

const HighlightedLink = (props) => {
  // check if the root url matches one of the three nav links
  const match = props.to === `/${getRootPath()}`;

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
    <HighlightedLink to="/" title="Home" />&nbsp;
    <HighlightedLink to="/docs" title="Docs" />&nbsp;
    <HighlightedLink to="/blog" title="Blog" />&nbsp;
  </div>
);
export default Navbar;
