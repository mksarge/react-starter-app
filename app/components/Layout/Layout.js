import React, { PropTypes } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import css from './Layout.css';

const Layout = (props) => (
  <div className={css.page} >
    <Header title="title" />
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
