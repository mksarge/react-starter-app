import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import css from './Layout.css';

const Layout = (props) => (
  <div className={css.container} >
    <Header />
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
