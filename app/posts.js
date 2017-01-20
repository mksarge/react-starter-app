// declare your active blog posts here
const titles = [
  'sample-post-1.md',
  'sample-post-2.md',
];

const posts = titles.map((title) => require(`../posts/${title}`)); // eslint-disable-line import/no-dynamic-require, global-require

export default posts;
