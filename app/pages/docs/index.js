import React from 'react';

class DocsPage extends React.Component {

  componentDidMount() {
    document.title = 'Docs';
  }

  render() {
    return (
      <div>
        <h1>Docs</h1>
      </div>
    );
  }

}

export default DocsPage;
