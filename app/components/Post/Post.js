import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import posts from '../../posts';
import Page from '../Page';
import css from './Post.css';

const renderTags = (tags) => {
  const arr = tags.split(', ');
  return arr.map((tag) => <p key={tag} className={css.tag}>{tag}</p>);
};

class Post extends React.Component {
  constructor() {
    super();
    this.state = { post: '' };
  }

  componentWillMount() {
    // use the url query string to find the matching markdown post
    const post = posts.find((val) => val.url === this.props.params.postId);

    // if the post was not found, redirect to /blog; else, set state
    (!post) ? browserHistory.push('/blog') : this.setState({ post }); // eslint-disable-line no-unused-expressions
  }

  render() {
    return (
      <Page title={this.state.post.title}>
        <div className={css.return}>
          <Link to="/blog">← Return to Posts</Link>
        </div>
        <div className={css.header1}>
          <h1>{this.state.post.title}</h1>
          <h2>{this.state.post.subtitle}</h2>
        </div>
        <div className={css.header2}>
          <div>
            <p>Posted:</p>
            <p className={css.date}>{this.state.post.date}</p>
            <p>Tags:</p>
            {this.state.post.tags && renderTags(this.state.post.tags)}
          </div>
        </div>
        <hr />
        <div
          className={css.post}
          dangerouslySetInnerHTML={{ __html: this.state.post.html }}
        />
      </Page>
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
