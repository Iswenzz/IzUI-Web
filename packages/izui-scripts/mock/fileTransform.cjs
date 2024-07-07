const path = require("path");

exports.process = (sourceText, sourcePath, options) => ({
	code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`
});
