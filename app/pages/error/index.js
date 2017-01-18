import React from 'react';
import { browserHistory, Link } from 'react-router';
import css from './index.css';

class ErrorPage extends React.Component {

  componentDidMount() {
    document.title = 'Page Not Found';
  }

  render() {
    return (
      <div className={css.container}>
        <div className={css.status}>
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
        <p>
          The page you&apos;re looking for does not exist.
          <br />
          <a href="/" onClick={() => browserHistory.goBack()}>Go back</a>
          , or head to the &nbsp;<Link to="/">home page</Link>.
        </p>
      </div>
    );
  }

}

export default ErrorPage;
