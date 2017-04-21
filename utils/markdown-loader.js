/**
 * Adapted from React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 */

const MarkdownIt = require('markdown-it');
const MarkdownItAnchor = require('markdown-it-anchor');
const MarkdownItTableOfContents = require('markdown-it-table-of-contents');
const hljs = require('highlight.js');
const fm = require('front-matter');

module.exports = function markdownLoader(source) {
  this.cacheable();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (err) { console.error(err.stack); } // eslint-disable-line no-console
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (err) { console.error(err.stack); } // eslint-disable-line no-console

      return '';
    },
  });

  md.use(MarkdownItAnchor);
  md.use(MarkdownItTableOfContents, {
    includeLevel: [1, 2, 3],
  });

  const frontmatter = fm(source);
  frontmatter.attributes.html = md.render(frontmatter.body);

  return `module.exports = ${JSON.stringify(frontmatter.attributes)};`;
};
