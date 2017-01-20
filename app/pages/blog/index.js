import React from 'react';
import { Link } from 'react-router';
import posts from '../../posts';
import css from './index.css';

const renderPosts = () => posts.map((post) => (
  <li className={css.links} key={post.url}>
    <Link to={`/blog/${post.url}`}>{post.title}</Link>
  </li>));

class BlogPage extends React.Component {

  componentDidMount() {
    document.title = 'Blog · React Starter App';
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <h3>January 2017</h3>
        <ul>
          {renderPosts()}
        </ul>
      </div>
    );
  }

}

export default BlogPage;
