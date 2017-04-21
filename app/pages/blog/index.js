import React from 'react';
import { Link } from 'react-router';
import Page from '../../components/Page';
import css from './index.css';
import posts from '../../../config/posts';

const renderPosts = posts.map((post) => (
  <li key={post.url}>
    <h5 className={css.link}><Link to={`/blog/${post.url}`}>{post.title}</Link></h5>
    <p className={css.date}>{post.formattedDate}</p>
  </li>));

const BlogPage = () => (
  <Page title="Blog">
    <h2>All Posts</h2>
    <ul>
      {renderPosts}
    </ul>
  </Page>
);

export default BlogPage;
