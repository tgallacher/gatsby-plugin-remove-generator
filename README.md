# gatsby-plugin-remove-generator

Customise or remove the generator meta tag on your Gatsby site.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square&logo=Github)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/tgallacher/gatsby-plugin-remove-generator/graphs/commit-activity)
![NPM version](https://img.shields.io/npm/v/gatsby-plugin-remove-generator.svg?style=flat)
![NPM license](https://img.shields.io/npm/l/gatsby-plugin-remove-generator.svg?style=flat)
![Build Status](https://github.com/tgallacher/gatsby-plugin-remove-generator/workflows/CI-CD/badge.svg)

## Background

When Gatsby creates a build of your site it will auto-inject a `<meta>` tag indicating the Gatsby version used to build your site. For example:

```html
<meta name="generator" content="Gatsby 2.13.2" />
```

This is too much detail for my personal preference, and also has potential security implications.

This plugin lets you either customize this content string, or remove the `meta` tag completely.

## Install

> Note: The generator tag is only injected during a production build, and so this plugin will only have an effect on the production output.

To add this plugin to your Gatsby setup, simply install using yarn/npm

```sh
yarn add gatsby-plugin-remove-generator
# or
npm install gatsby-plugin-remove-generator
```

and add the plugin to your config file:

```js
// gatsby-config.js
module.exports = {
  ...
  plugins: [
    'gatsby-plugin-remove-generator',
  ]
};
```

And you're done. By default, with the above setup, the `meta` tag will be removed completely from your build. Use the options config to customize the behavior.

## Options

```js
// gatsby-config.js
module.exports = {
  ...
  plugins: [
    {
      resolve: 'gatsby-plugin-remove-generator',
      options: {
        // Only remove the Gatsby version number instead of the whole `meta` tag
        removeVersionOnly: true,
        // Customise the generator content string.
        // Note: This has the highest precedence of the available options.
        content: 'Custom string'
      },
  ]
};
```
