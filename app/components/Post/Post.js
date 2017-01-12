import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import css from './Post.css';
import posts from '../../../posts';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      html: null,
    };
  }

  componentWillMount() {
    const post = posts[this.props.params.postId];

    // if post cannot be loaded, redirect to /blog
    if (!post) browserHistory.push('/blog');
    else this.setState({ title: post.title, html: post.html });
  }

  componentDidMount() {
    document.title = `${this.state.title} · React Starter`;
  }

  render() {
    return (
      <div className={css.container}>
        <h1>{this.state.title}</h1>
        <div className={css.subcontainer} dangerouslySetInnerHTML={{ __html: this.state.html }} />
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
