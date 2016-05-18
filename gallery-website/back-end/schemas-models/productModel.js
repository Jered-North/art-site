var mongoose = require("mongoose");
var cartSchema = require("./cartSchema.js");

var productSchema = new mongoose.Schema({

	picture: {
		type: String, required: true
	},

	title: {
		type: String, required: true
	},
	price: {
		type: Number, required: true, min: 0
	},
	description: {
		type: String, reequired: false
	},
	cart: cartSchema
});

module.exports = mongoose.model("Product", productSchema);