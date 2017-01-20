import { browserHistory } from 'react-router';

/**
 * Returns a formatted 'root path' from the current location.
 * Ex. '/' => 'home'
 * Ex. '/blog/post1' => 'blog'
 * @returns {string}
 */
const getRootPath = () => {
  const path = browserHistory.getCurrentLocation().pathname.slice(1);
  if (path.length === 0) return 'home';
  const index = path.indexOf('/');
  return (index !== -1) ? path.slice(0, index) : path;
};

export { getRootPath }; // eslint-disable-line
