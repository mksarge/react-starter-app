const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  name: 'React Starter App',
  github: 'https://github.com/mksarge/react-starter-app',
  logo: '/react-logo.png',
  routes: [
    { path: '/', name: 'home' },
    { path: '/docs', name: 'docs' },
    { path: '/blog', name: 'blog' },
  ],
};

export default config;
