module.exports = {
	jest: function(config) {
		if (process.env.CI) {
			config.bail = 1;
			config.collectCoverage = true;
			config.reporters = ["default", "jest-junit"];
		}

		return config;
	}
};