import React from 'react';
import Page from '../../components/Page';
import md from './index.md';

const HomePage = () => (
  <Page title="Home">
    <div dangerouslySetInnerHTML={{ __html: md.html }} />
  </Page>
);

export default HomePage;
