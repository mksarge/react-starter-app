import React from 'react';
import { Link } from 'redux-json-router';
import Page from '../../components/Page';
import css from './index.css';

const ErrorPage = () => (
  <Page title="Page Not Found">
    <div className={css.container}>
      <div className={css.status}>
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
      <p>
        The page you&apos;re looking for does not exist.
          <br />
        <Link to="/" action="back">Go back</Link>
        , or head to the &nbsp;<Link to="/">home page</Link>.
        </p>
    </div>
  </Page>
);

export default ErrorPage;
