import moment from 'moment';

const markdown = require.context('../posts', false, /\.(md)$/);

const posts = markdown.keys().map((filename) => ({
  ...markdown(filename),
  url: filename.slice(2, filename.length - 3),
  formattedDate: moment(markdown(filename).date).format('MMM Do, YYYY'),
}));

// sort posts array by date
posts.sort((a, b) => { // eslint-disable-line
  return moment(a.date).isBefore(b.date) ? 1 : -1;
});

export default posts;
