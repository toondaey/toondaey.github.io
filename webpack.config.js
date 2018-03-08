const entry = require("./src/._pack/entry"),
		output = require("./src/._pack/output"),
		modules = require("./src/._pack/module"),
		devServer = require("./src/._pack/devServer"),
		plugins = require("./src/._pack/plugins");
		
		// Environment variables
		prod = process.env.NODE_ENV === "production",
		watch = process.env.NODE_WEBPACK_WATCH === "yes";

const config = {
	watch: watch,
	entry,
	output,
	module: modules,
	devServer,
	plugins,
};

module.exports = config;