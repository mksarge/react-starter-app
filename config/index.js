const env = process.env.NODE_ENV || 'development';

// config settings for development environment
const config = {
  env,
  title: 'React Starter',
  project: 'react-starter',
  github: 'https://github.com/mksarge/react-starter',
};

// alternative settings for test environment
if (env === 'test') {
  //
}

// alternative settings for production environment
if (env === 'production') {
  //
}

export default config;
