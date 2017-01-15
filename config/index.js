// declare your active blog posts here
import * as post1 from '../posts/sample-post-1.md';
import * as post2 from '../posts/sample-post-2.md';

const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  title: 'React Starter App',
  project: 'react-starter-app',
  github: 'https://github.com/mksarge/react-starter-app',
};

const posts = [
  post1,
  post2,
];

// alternative settings for test environment
// if (env === 'test') { }

// alternative settings for production environment
// if (env === 'production') { }

export { config, posts };
