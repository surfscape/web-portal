const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/ring.txt": "/ring.txt" });
  eleventyConfig.addWatchTarget("src/css");
  const md = markdownIt({ html: true });
  md.use(markdownItAttrs);
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
      layouts: "_layouts",
      data: "_data",
      output: "dist",
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
