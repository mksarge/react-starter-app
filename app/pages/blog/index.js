import React from 'react';
import { Link } from 'react-router';
import { posts } from '../../../config';
import md from './index.md';

import css from './index.css';

class BlogPage extends React.Component {

  static renderPosts() {
    return posts.map((post) => (
      <p className={css.links} key={post.url}>
        <Link to={`/blog/${post.url}`}>{post.title}</Link>
      </p>));
  }

  componentDidMount() {
    document.title = 'Blog · React Starter App';
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: md.html }} />
        {BlogPage.renderPosts()}
      </div>
    );
  }

}

export default BlogPage;
