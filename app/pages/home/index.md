---
title: Home
---

**React Starter App** is a starting point for building and deploying production-ready,
static, single-page React applications. It can be served blazingly fast by a static content
hosting service like [Firebase][firebase], [Amazon S3][s3], or [GitHub pages][ghp]<sup>[[1]](/docs#github-pages)</sup>.

<br>

React Starter App is based on another great project — [React Static Boilerplate][rsb], and
borrows from much of its tooling and infrastructure. [Read more here](/docs#motivation) about the motivation for this
project and the differences between the two.

<hr>

### Features

React Starter App features modern development, build, test, and deploy tooling including:

<br>

- [React Router][react-router] for handling client-side routing
- [Babel][babel] for transpiling application code from ES6+ to ES5
- [Webpack][webpack] for bundling files, and [Hot Module Replacement][hmr] in development
- [CSS Modules][css-modules] for writing modular and composable CSS
- [Markdown-it][md-it] for rendering markdown as React using a Webpack loader
- [ESlint][eslint] and [Stylelint][stylelint] for linting .js and .css, respectively
- [Mocha][mocha] and [Enzyme][enzyme] for unit testing React components
- [Travis CI][travis] configuration for continuous testing/integration
- [Firebase][firebase] configuration for quick and easy deployment

<br>

**Learn more about the technologies used to build React Starter App [here](/docs).**

<hr>

### Getting Started

```sh
# Clone the repository
git clone https://github.com/mksarge/react-starter-app myproject
cd myproject

# Install dependencies
npm install

# Run tests
npm run test

# Start dev build
npm run start

# Deploy to Firebase
npm run publish
```

<hr>

### Contribute

React Starter App is on [GitHub][github] — feel free to fork it, raise an [issue][issues] or
submit a [pull request][pulls].

<hr>

### License

This project is licensed under the [MIT license][license].

[ghp]: <https://pages.github.com/>
[swa]: <https://staticapps.org/>
[rsa]: <https://react-starter-app.firebaseapp.com/>
[rsb]: <https://github.com/kriasoft/react-static-boilerplate>
[firebase]: <https://firebase.google.com/>
[s3]: <http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html>
[react-router]: <https://github.com/ReactTraining/react-router>
[css-modules]: <https://github.com/css-modules/css-modules>
[md-it]: <https://github.com/markdown-it/markdown-it>
[babel]: <https://babeljs.io/>
[webpack]: <https://webpack.js.org/>
[hmr]: <https://webpack.js.org/guides/hmr-react/>
[eslint]: <http://eslint.org/>
[stylelint]: <http://stylelint.io/>
[mocha]: <https://mochajs.org/>
[enzyme]: <http://airbnb.io/enzyme/>
[travis]: <https://travis-ci.org/>
[redux-starter-app]: <https://github.com/mksarge/redux-starter-app>
[github]: <https://github.com/mksarge/react-starter-app>
[issues]: <https://github.com/mksarge/react-starter-app/issues>
[pulls]: <https://github.com/mksarge/react-starter-app/pulls>
[mksarge]: <https://github.com/mksarge/>
[license]: <https://github.com/mksarge/react-starter-app/blob/master/LICENSE.txt>
