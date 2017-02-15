import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../posts';

const renderPosts = posts.map((post) => (
  <li className={css.links} key={post.url}>
    <Link to={`/blog/${post.url}`}>{post.title}</Link>
  </li>));

const BlogPage = () => (
  <Page title="Posts">
    <h3>January 2017</h3>
    <ul>
      {renderPosts}
    </ul>
  </Page>
);

export default BlogPage;
