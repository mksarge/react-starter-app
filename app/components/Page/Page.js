import React, { PropTypes } from 'react';
import css from './Page.css';
import config from '../../../config/config.json';

class Page extends React.Component {
  componentDidMount() {
    document.title = `${this.props.title} · ${config.name}`;
  }

  render() {
    return (
      <div className={css.page} >
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div >);
  }
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
