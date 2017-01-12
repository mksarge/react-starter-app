import React from 'react';
import { Link } from 'react-router';
import posts from '../../../posts';

class BlogPage extends React.Component {

  componentDidMount() {
    document.title = 'Blogs';
  }

  renderBlogs() {
    const arr = [];
    Object.keys(posts).forEach((val, i) => {
      console.log(val, i);
      const asdf = (
        <Link to={`/blog/${val}`}>
          {posts[val].title}
        </Link>
      );
      arr.push(asdf);
    });
    return arr;
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
        {this.renderBlogs()}
      </div>
    );
  }

}

export default BlogPage;
