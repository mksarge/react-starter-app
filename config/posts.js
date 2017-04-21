import moment from 'moment';

const posts = [];

// load posts
const context = require.context('../posts', false, /\.(md)$/);

// build posts array
context.keys().forEach((filename) => {
  const post = Object.assign(
    {},
    context(filename),
    { url: filename.slice(2, filename.length - 3) },
    { formattedDate: moment(context(filename).date).format('MMM Do, YYYY') },
  );
  posts.push(post);
});

// sort posts array by date
posts.sort((a, b) => { // eslint-disable-line
  return moment(a.date).isBefore(b.date) ? 1 : -1;
});

export default posts;
