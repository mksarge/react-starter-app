import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../Header';
import NavBar, { getRootPath } from '../NavBar';
import Footer from '../Footer';
import css from './Layout.css';
import { config } from '../../../config';

const Layout = (props) => {
  const path = getRootPath();
  return (
    <div className={css.container} >
      <Header header={config.header} />
      <NavBar />
      <div className={css.page} >
        <div className={css.path}>
          <Link to={`/${path}`}>{path || 'home'}</Link>
        </div>
        <div>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
