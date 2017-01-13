import React from 'react';
import md from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'Home · React Starter App';
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    );
  }

}

export default HomePage;
