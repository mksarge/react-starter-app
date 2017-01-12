import React from 'react';
import { Link } from 'react-router';
import posts from '../../../posts';

class BlogPage extends React.Component {

  static renderBlogs() {
    const arr = [];
    Object.keys(posts).forEach((val, i) => {
      console.log(val, i);
      const asdf = (
        <Link key={val} to={`/blog/${val}`}>
          {posts[val].title}
        </Link>
      );
      arr.push(asdf);
    });
    return arr;
  }

  componentDidMount() {
    document.title = 'Blog · React Starter';
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
        {BlogPage.renderBlogs()}
      </div>
    );
  }

}

export default BlogPage;
