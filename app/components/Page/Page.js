import React, { PropTypes } from 'react';
import css from './Page.css';
import config from '../../config';
import { getRootPath } from '../../utils';

class Page extends React.Component {
  componentDidMount() {
    document.title = `${this.props.title} · ${config.name}`;
  }

  render() {
    return (
      <div className={css.page} >
        <p className={css.title}>{getRootPath()}</p>
        {this.props.children}
      </div>);
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
