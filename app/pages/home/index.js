import React from 'react';
// import { Link } from 'react-router';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'Home';
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
