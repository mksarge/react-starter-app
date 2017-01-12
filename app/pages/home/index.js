import React from 'react';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'Home · React Starter';
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }

}

export default HomePage;
