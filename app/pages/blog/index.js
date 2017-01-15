import React from 'react';
import { Link } from 'react-router';
import { posts } from '../../../config';

class BlogPage extends React.Component {

  static renderBlogs() {
    return posts
      .map((val) => (
        <div key={val.url}>
          <Link to={`/blog/${val.url}`}>{val.title}</Link>
          <br /><br />
        </div>));
  }

  componentDidMount() {
    document.title = 'Blog · React Starter App';
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {BlogPage.renderBlogs()}
      </div>
    );
  }

}

export default BlogPage;
