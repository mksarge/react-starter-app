import React from 'react';
import md from './index.md';

class DocsPage extends React.Component {

  componentDidMount() {
    document.title = 'Docs · React Starter App';
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    );
  }

}

export default DocsPage;
