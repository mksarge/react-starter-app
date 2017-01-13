import React from 'react';
import { Link } from 'react-router';
import posts from '../../../posts';

class BlogPage extends React.Component {

  static renderBlogs() {
    const arr = [];
    Object.keys(posts).forEach((val) => {
      arr.push((<Link key={val} to={`/blog/${val}`}>{posts[val].title}</Link>));
    });
    return arr;
  }

  componentDidMount() {
    document.title = 'Blog · React Starter';
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
