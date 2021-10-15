var app = require("../../app");
var modulesGraph = require("../../graphs/modules");

module.exports = function(id) {
	id = parseInt(id, 10);
	document.title = "chunk " + id;

	newStats = Object.assign({}, app.stats)
	newStats.modules = newStats.modules.filter(m => m.type !== "hidden modules")

	$(".page").html(
		require("./chunk.pug")({
			stats: newStats,
			id: id,
			chunk: app.mapChunks[id]
		})
	);
	modulesGraph.show();
	modulesGraph.setActiveChunk(id);
	return function() {
		modulesGraph.hide();
	};
};
