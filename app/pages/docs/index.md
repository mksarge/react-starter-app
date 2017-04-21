---
title: Docs
permalinks: true
---

> React Starter App is constantly evolving! If you see something that needs updating, please
[file an issue][issues]. Thanks!

[[toc]]

<hr>

### Motivation

React Starter App was inspired by another amazing project:

> ##### [React Static Boilerplate][rsb]
>
> React Static Boilerplate (RSB) is a boilerplate and tooling for creating modern stand-alone
web applications (aka SPAs) for a serverless architecture. RSB significantly reduces cost by
eliminating the need for servers such as EC2 instances because the entire site can be hosted
directly from CDN (Firebase, GitHub Pages, Amazon S3, or other similar cloud storage). Sites
built with RSB can be fully functional with REST API or GraphQL calls to micro-services such
as Amazon Lambda, Azure Functions, or dynamic Docker endpoints hosted on DigitalOcean. RSB
demonstrates how to use component-based UI development approach with best of breed technologies
including React, Redux, Babel, Webpack, Browsersync, React Hot Loader and more.

React Static Boilerplate has a ton of neat features, and React Starter App builds upon it by integrating [`redux-json-router`][redux-json-router], removing the dependency on [`react-mdl`][react-mdl], and a few other minor changes.

<hr>

### App Structure

```sh
├── app/                        # React appplication
│   ├── components/             # Shared or generic UI components
│   │   ├── Layout/             # Shared Layout component
│   │   └── ...                 # etc.
│   ├── pages/                  # React components for web pages
│   │   ├── home/               # Home page
│   │   └── ...                 # etc.
│   └── index.js                # Application entry point; React Router config
├── config/                     # Environment settings, etc.
├── node_modules/               # 3rd-party libraries and utilities
├── public/                     # Static files such as favicon.ico etc.
│   ├── dist/                   # The folder for compiled output
│   └── ...                     # etc.
├── test/                       # Tests
├── utils/                      # Utility and helper classes
├── package.json                # The list of project dependencies and NPM scripts
├── run.js                      # Build automation script, e.g. `node run build`
└── webpack.config.js           # Bundling and optimization settings for Webpack
```

<hr>

### Core Technologies

- Application
  - [React][react]
  - [Redux][redux]
  - [Redux JSON Router][redux-json-router]
  - [CSS Modules][css-modules]
  - [Markdown-it][md-it]
- Build process
  - [Webpack 2][webpack]
  - [Babel][babel]
  - [PostCSS][postcss]
- Linting
  - [ESLint][eslint]
  - [Stylelint][stylelint]
- Testing
  - [Mocha][mocha]
  - [Enzyme][enzyme]

<hr>

### Tutorial

**[under construction]**

A step-by-step tutorial to build React Starter App from scratch.

[issues]: <https://github.com/mksarge/react-starter-app/issues>
[swa]: <https://staticapps.org/>
[rsb]: <https://github.com/kriasoft/react-static-boilerplate>
[react]: <https://facebook.github.io/react/>
[redux]: <http://redux.js.org/>
[react-router]: <https://github.com/ReactTraining/react-router>
[css-modules]: <https://github.com/css-modules/css-modules>
[md-it]: <https://github.com/markdown-it/markdown-it>
[eslint]: <http://eslint.org/>
[stylelint]: <http://stylelint.io/>
[mocha]: <https://mochajs.org/>
[enzyme]: <http://airbnb.io/enzyme/>
[webpack]: <https://webpack.js.org/>
[hmr]: <https://webpack.js.org/guides/hmr-react/>
[babel]: <https://babeljs.io/>
[postcss]: <https://github.com/postcss/postcss>
[routing-article]: <https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d>
[react-mdl]: <https://github.com/react-mdl/react-mdl>
[react-libraries]: <https://github.com/enaqx/awesome-react#libraries>
[redux-json-router]: <https://github.com/mksarge/redux-json-router>
