import React, { PropTypes } from 'react';
import Header from '../Header';
import NavBar from '../NavBar';
import Footer from '../Footer';
import css from './Layout.css';

const Layout = (props) => (
  <div className={css.page} >
    <Header title="title" />
    <NavBar title="test" />
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
