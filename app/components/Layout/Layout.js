import React, { PropTypes } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import css from './Layout.css';
import config from '../../../config/env';

const Layout = (props) => (
  <div className={css.page} >
    <Header title={config.title} />
    <div className={css.body} >
      {props.children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
