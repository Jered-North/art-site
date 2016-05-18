var GalleryItem = require("../schemas-models/galleryModel.js")

module.exports = {

	Create: function(req, res, next) {
		var newItem = new GalleryItem(req.body);
		newItem.save(function(err, response) {
			if(err) {
				res.status(500).json(err);
			}
			else {
				res.status(200).json(response);
			}
		})
	},

	Read: function(req, res, next) {
		GalleryItem.find().exec(function(err, response) {
            if(err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(response);
            }
		})
	},

    Update: function(req, res, next) {
        GalleryItem.findByIdAndUpdate(req.params.id, req.body, function(err, response){
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json(response);
            }
        })
    },
    
    Delete: function(req, res, next) {
        GalleryItem.findByIdAndRemove(req.params.id, function(err, response){
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json(response);
            }
        })
    },
}