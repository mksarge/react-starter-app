import React from 'react';
import { Link } from 'react-router';
import { posts } from '../../../config';
import md from './index.md';
import css from './index.css';

class BlogPage extends React.Component {

  static renderPosts() {
    return posts.map((post) => (
      <li className={css.links} key={post.url}>
        <Link to={`/blog/${post.url}`}>{post.title}</Link>
      </li>));
  }

  componentDidMount() {
    document.title = 'Blog · React Starter App';
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: md.html }} />
        <ul>
          {BlogPage.renderPosts()}
        </ul>
      </div>
    );
  }

}

export default BlogPage;
