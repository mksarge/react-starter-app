import React, { PropTypes } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import css from './Layout.css';

const Layout = (props) => (
  <div className={css.container} >
    <Header />
    <Navbar />
    <div>{props.children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
