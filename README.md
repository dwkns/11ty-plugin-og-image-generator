# OG image generator

Creates an OpenGraph image from your page title.

In `.eleventy.js`

```js
const imgageGen = require("11ty-plugin-og-image-generator")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(imgageGen, {});
}
```
In your template you have to use `eleventyComputed`. 
It creates a special shortcode that returns the filename of created image. 
Pass it a filename, the text you want on it and templateImage 

```
---
title: Some title 
eleventyComputed:
    ogImageTemplate: "tmeplatefsklsjflk"
    ogImageName: "{% ogImage title |  slug , ogImageTemplate  %}"
---

This will become a plugin that allows you to gnerate Open Graph images automatically from your page titles.

Currently it is a pile of crap and still in development. You shouldn't use it. 

Use this for reference :
https://zellwk.com/blog/publish-to-npm/

