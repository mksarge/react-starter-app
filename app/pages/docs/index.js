import React from 'react';
import Page from '../../components/Page';
import md from './index.md';

const DocsPage = () => (
  <Page title="Docs">
    <div dangerouslySetInnerHTML={{ __html: md.html }} />
  </Page>
);

export default DocsPage;
