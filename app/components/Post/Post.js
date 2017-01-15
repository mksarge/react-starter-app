import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import css from './Post.css';
import { posts } from '../../../config';

class Post extends React.Component {
  constructor() {
    super();
    this.state = { post: '' };
  }

  componentWillMount() {
    // use the url query string to find the matching markdown post
    const post = posts.find((val) => val.url === this.props.params.postId);

    // if the post was not found, redirect to /blog
    if (!post) browserHistory.push('/blog');

    // if the post was loaded successfully, save it in the state
    else this.setState({ post });
  }

  componentDidMount() {
    document.title = `${this.state.post.title} · React Starter App`;
  }

  render() {
    return (
      <div>
        <div className={css.return}>
          <Link to="/blog">← Return to Posts</Link>
        </div>
        <div className={css.header1}>
          <h1>{this.state.post.title}</h1>
          <h2>{this.state.post.subtitle}</h2>
        </div>
        <div className={css.header2}>
          <p>{this.state.post.date}</p>
          <p>Tags: {this.state.post.tags}</p>
        </div>
        <hr />
        <div
          className={css.post}
          dangerouslySetInnerHTML={{ __html: this.state.post.html }} />
      </div>
    );
  }
}

Post.propTypes = {
  params: PropTypes.shape({
    postId: PropTypes.string,
  }),
};


Post.defaultProps = {
  params: {
    postId: '',
  },
};

export default Post;
