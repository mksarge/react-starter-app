import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import css from './Navbar.css';

const HighlightedLink = (props) => {
  // get url pathname without leading '/'
  let path = browserHistory.getCurrentLocation().pathname.slice(1);

  // check if there is another '/' in the url, and slice it off
  const index = path.indexOf('/');
  path = (index !== -1) ? path.slice(0, index) : path;

  // check if sliced url matches one of the three nav links
  const match = props.to === `/${path}`;

  // highlight Link style if the url matches
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
