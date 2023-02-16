const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItAnc = require("markdown-it-anchor");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/ring.txt": "/ring.txt" });
  eleventyConfig.addWatchTarget("src/css");
  const md = markdownIt({ html: true, linkify: true });
  md.use(markdownItAttrs);
  md.use(markdownItAnc);
  eleventyConfig.setLibrary("md", md);
  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("LLL dd yyyy");
  });
  eleventyConfig.addFilter("split", function (value, separator) {
    return value.split(separator);
  });
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "layouts",
      output: "_site",
      data: "data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: ["njk"],
  };
};
