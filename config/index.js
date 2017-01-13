const env = process.env.NODE_ENV || 'development';

// config settings for development environment
const config = {
  env,
  title: 'React Starter App',
  project: 'react-starter-app',
  github: 'https://github.com/mksarge/react-starter-app',
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
