const pluginRev = require("eleventy-plugin-rev");
const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin(pluginRev);
	eleventyConfig.addPlugin(eleventySass, {
		compileOptions: {
		  permalink: function(contents, inputPath) {
			return (data) => data.page.filePathStem.replace(/^\/scss\//, "/css/") + ".css";
		  }
		},
		sass: {
		  style: "compressed",
		  sourceMap: true
		},
		rev: true
	  });

	return {
	  dir: {
		input: "src",
		output: "dist"
	  }
	}
  };
