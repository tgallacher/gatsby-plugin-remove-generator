# gatsby-plugin-remove-generator

Customise or remove the "_generator_" meta tag on your Gatsby site.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square&logo=Github)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/tgallacher/gatsby-plugin-remove-generator/graphs/commit-activity)
![NPM version](https://img.shields.io/npm/v/gatsby-plugin-remove-generator.svg?style=flat)
![NPM license](https://img.shields.io/npm/l/gatsby-plugin-remove-generator.svg?style=flat)
[![Build Status](https://travis-ci.com/tgallacher/gatsby-plugin-remove-generator.svg?branch=master)](https://travis-ci.com/tgallacher/gatsby-plugin-remove-generator)

### Background

Gatsby auto injects a `<meta>` tag in the `<head>` of your site that indicates the Gatsby version used to build your site, for example.

```html
<meta name="generator" content="Gatsby 2.13.2" />
```

This is too much detail, for my liking, and also has potential security implications.

## Install

> Note: The generator tag is only injected during a production build, and so this plugin will have an effect on the production output.

To add to your Gatsby setup, simply install

```sh
yarn add gatsby-plugin-remove-generator
```

and add to your config file:

```js
// gatsby-config.js
module.exports = {
  ...
  plugins: [
    'gatsby-plugin-remove-generator',
  ]
};
```

## Options

Pass supported options to the plugin to modify its default behaviour.

```js
// gatsby-config.js
module.exports = {
  ...
  plugins: [
    {
      resolve: 'gatsby-plugin-remove-generator',
      options: {
        // Only remove the Gatsby version number instead of the whole node
        removeVersionOnly: true,
        // Customise the generator string altogether.
        // Note: This has the highest precedence of the available options.
        content: 'Custom string'
      },
  ]
};
```
