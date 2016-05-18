module.exports = {

	Create: function(req, res, next) {
		if (!req.session.cart) {
			req.session.cart = [];
		}
		req.session.cart.push({id: req.body.id, picture: req.body.picture, title: req.body.title, price: req.body.price});
		res.status(200).json(req.session);
	},

	Read: function(req, res, next) {
		res.status(200).json(req.session.cart);
	},



	Delete: function(req, res, next) {
        req.session.cart.splice(this, 1);
        res.status(200).json(req.session.cart);
    }
}