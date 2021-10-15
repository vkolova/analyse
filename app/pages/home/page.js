var app = require("../../app");

module.exports = function() {
	document.title = "home";
	newStats = Object.assign({}, app.stats)
	newStats.modules = newStats.modules.filter(m => m.type !== "hidden modules")
	$(".page").html(
		require("./home.pug")({
			stats: newStats
		})
	);
};
