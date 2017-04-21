import React, { PropTypes } from 'react';
import Layout from '../Layout';
import css from './Page.css';
import config from '../../../config/config.json';

class Page extends React.Component {
  componentDidMount() {
    document.title = `${this.props.title} · ${config.name}`;
  }

  render() {
    return (
      <Layout>
        <div className={css.page} >
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
      </Layout>);
  }
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  title: '',
  children: null,
};

export default Page;
