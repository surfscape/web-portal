const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const { DateTime } = require("luxon");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/humans.txt");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget("src/humans.txt");
  /* plugins */
  const md = markdownIt({ html: true, breaks: true, linkify: true });
  md.use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  /* a way to make slots work inside content pages: https://danburzo.ro/eleventy-slotted-content/*/
  const slots = {};
  eleventyConfig.addGlobalData("eleventyComputed.slots", function () {
    return (data) => {
      const key = data.page.inputPath;
      slots[key] = slots[key] || {};
      return slots[key];
    };
  });
  eleventyConfig.addFilter("PostDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("EuDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("dd / MM / yyyy");
  });
  /* shortcodes */
  eleventyConfig.addPairedShortcode("slot", function (content, name) {
    if (!name) throw new Error("Missing name for {% slot %} block!");
    slots[this.page.inputPath][name] = content;
    return "";
  });
  /* collections */
  eleventyConfig.addCollection("news", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/news/posts/*.md");
  });
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md");
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
