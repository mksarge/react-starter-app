import React from 'react';

class BlogPage extends React.Component {

  componentDidMount() {
    document.title = 'Blogs';
    // this.getLatestBlogs();
  }

  getLatestBlogs() {
    // fetch();
  }

  renderBlogs() {
    return (
      <p>Blog content here</p>
      // <div dangerouslySetInnerHTML={{ __html: html }} />
    );
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>
      </div>
    );
  }

}

export default BlogPage;
