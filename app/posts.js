const posts = [];
const context = require.context('../posts', false, /\.(md)$/);

context.keys().forEach((filename) => {
  const post = Object.assign(
    {},
    context(filename),
    { url: filename.slice(2, filename.length - 3) },
  );
  posts.push(post);
});

export default posts;
