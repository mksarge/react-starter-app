// declare your active blog posts here
import * as post1 from '../posts/post1.md';

const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  title: 'React Starter App',
  project: 'react-starter-app',
  github: 'https://github.com/mksarge/react-starter-app',
};

const posts = [
  post1,
];

// alternative settings for test environment
// if (env === 'test') { }

// alternative settings for production environment
// if (env === 'production') { }

export { config, posts };
