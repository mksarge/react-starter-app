---
title: Docs
permalinks: true
---

[[toc]]

> React Starter App is constantly evolving! If you see something that needs updating, please
[file an issue][issues]. Thanks!

<hr>

# About

### Inspiration

React Starter App (RSA) is a [static web app][swa] inspired by and built upon another amazing project:

<br>

> ##### [React Static Boilerplate][rsb]
> by [@koistya](https://github.com/koistya)
> <br>
> <br>
> React Static Boilerplate (RSB) is a boilerplate and tooling for creating modern stand-alone
web applications (aka SPAs) for a serverless architecture. RSB significantly reduces cost by
eliminating the need for servers such as EC2 instances because the entire site can be hosted
directly from CDN (Firebase, GitHub Pages, Amazon S3, or other similar cloud storage). Sites
built with RSB can be fully functional with REST API or GraphQL calls to micro-services such
as Amazon Lambda, Azure Functions, or dynamic Docker endpoints hosted on DigitalOcean. RSB
demonstrates how to use component-based UI development approach with best of breed technologies
including React, Redux, Babel, Webpack, Browsersync, React Hot Loader and more.

<br>

React Static Boilerplate has a ton of neat features and **may be a better starting point for
some use cases** - read about the core differences between RSA and RSB
[here](#comparison-with-rsb).

<br>

If you are still unsure about which project to use, I **highly recommend trying both** and
learning about their differences first-hand!

<br>

### Core Technologies

- React Application
  - [React][react]
  - [React Router][react-router]
  - [CSS Modules][css-modules]
  - [Markdown-it][md-it]
- Linting
  - [ESLint][eslint]
  - [Stylelint][stylelint]
- Testing
  - [Mocha][mocha]
  - [Enzyme][enzyme]
- Build process
  - [Webpack 2][webpack] with [HMR][hmr]
  - [Babel][babel]
  - [PostCSS][postcss]

Learn more about how these technologies are used in React Starter App
[here](#concepts-and-technologies).

<br>

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

# Why React Starter App?

### Comparison with RSB

While using React Static Boilerplate, I found myself repeatedly using a stripped-down version
with some core integrations removed; this led me to create React Starter App.

<br>

> Essentially, **RSA is a less-opinionated version of RSB** in three main areas: *routing, state
management, and UI.*

<br>

##### Routing

RSA uses React Router instead of RSB's [custom routing solution][routing-article]. You might
prefer React Router because it abstracts away most of the complexity of routing and browser
history; or simply for it's familiarity and ease-of-use. If not, it is easily swapped out
with your preferred routing library.

<br>

> And if you don't require any client-side routing at all, you can find an
*even-more-stripped-down* version of React Starter App that doesn't use React Router
[in the tutorial](#tutorial).

<br>

##### State Management

RSA is unopinionated about state management in React. Unlike RSB, it does not integrate Redux
by default, as many basic use cases simply don't need it (or maybe you prefer MobX). If your
app requires state management, it shouldn't be difficult to add your preferred solution to
the project.

<br>

##### UI

For styling, RSB uses a combination of [React-MDL][react-mdl], CSS Modules, and PostCSS. While
CSS Modules and PostCSS are invaluable tools, React-MDL is just one of
[many React UI and Component libraries][react-libraries] and is not integrated into RSA.
Instead, a custom CSS reset is defined in `public/index.css`. If you need to use a UI library,
you can import it into your own project.

<br>

### Common Use Cases

React Starter App is perfect for building simple websites like a **landing page** for your
open-source project, a **documentation site**, or a **personal portfolio/blog**.
Out of the box, you might only need to

- change the `.css` and `.md` files
- add or remove routes from `app/index.js`

to get started on your own custom page.

<br>

React Starter App also scales well and can be used to build complex applications. For a
working example including Redux integration, OAuth2 login/sessions, and HTTP calls to a
Node.js REST API, check out [todo].

<hr>

# Concepts and Technologies

This section explains some concepts and technologies as they relate to React Starter App.

- React
- Single Page Applications
  - Routing
    - React Router
- State Management
  - Redux
- CSS
  - CSS Modules
- JavaScript Bundler
  - Webpack
- JavaScript Transpiler
  - Babel
- Static Web Apps
  - Deployment
    - Firebase
    - GitHub Pages
    - Surge
    - Netlify
- Further Reading
  - Links

<hr>

# Tutorial

**[under construction]**

A step-by-step tutorial to build React Starter App from scratch.

[issues]: <https://github.com/mksarge/react-starter-app/issues>
[swa]: <https://staticapps.org/>
[rsb]: <https://github.com/kriasoft/react-static-boilerplate>
[react]: <https://facebook.github.io/react/>
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
[react-mdl]: <https://react-mdl.github.io/react-mdl/components/>
[react-libraries]: <https://github.com/enaqx/awesome-react#libraries>
