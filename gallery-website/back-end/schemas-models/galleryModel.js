var mongoose = require("mongoose");

var gallerySchema = new mongoose.Schema({

	picture: {
		type: String, required: true
	},

	title: {
		type: String, required: true
	},

	description: {
		type: String, required: false
	}
});

module.exports = mongoose.model("Gallery", gallerySchema);