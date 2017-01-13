import React from 'react';
import md from './index.md';

class DocsPage extends React.Component {

  componentDidMount() {
    document.title = 'Docs · React Starter';
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    );
  }

}

export default DocsPage;
