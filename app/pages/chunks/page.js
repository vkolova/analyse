var app = require("../../app");
var chunksGraph = require("../../graphs/chunks");

module.exports = function() {
	document.title = "chunks";
	newStats = Object.assign({}, app.stats)
	newStats.modules = newStats.modules.filter(m => m.type !== "hidden modules")

	$(".page").html(
		require("./chunks.pug")({
			stats: newStats
		})
	);
	chunksGraph.show();
	return function() {
		chunksGraph.hide();
	};
};
