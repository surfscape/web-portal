const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/humans.txt");
  eleventyConfig.addWatchTarget("src/css");
  eleventyConfig.addWatchTarget("src/humans.txt");
  const md = markdownIt({ html: true });
  md.use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("PostDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("EuDate", function (date) {
    return DateTime.fromJSDate(date).toFormat("dd / MM / yyyy");
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
