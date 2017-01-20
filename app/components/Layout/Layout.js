import React, { PropTypes } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import css from './Layout.css';
import config from '../../env';

const Layout = (props) => (
  <div className={css.layout} >
    <Header text={config.header} />
    <Navbar />
    <div className={css.page}>
      {props.children}
    </div>
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
