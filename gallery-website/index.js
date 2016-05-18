var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var nodemailer = require('nodemailer');


var config = require("./config.json");
var productCtrl = require("./back-end/controllers/productController.js");
var cartCtrl = require("./back-end/controllers/cartController.js");
var galleryCtrl = require("./back-end/controllers/galleryController.js");

var app = express();

app.use(bodyParser.json());

app.use(session({
	secret: config.sessionSecret,
	saveUninitialized: true,
	resave: true
}));


app.use(express.static(__dirname + '/public'));

//product //shop
app.get('/api/products', productCtrl.Read);
app.post('/api/products', productCtrl.Create);
app.put('/api/products/:id', productCtrl.Update);
app.delete('/api/products/:id', productCtrl.Delete);


//gallery
app.get('/api/gallery', galleryCtrl.Read);
app.post('/api/gallery', galleryCtrl.Create);
app.put('/api/gallery/:id', galleryCtrl.Update);
app.delete('/api/gallery/:id', galleryCtrl.Delete);


//remove from cart
//edit cart? qty?

//Cart
app.get('/cart', cartCtrl.Read);
app.post('/cart', cartCtrl.Create);
app.delete('/cart', cartCtrl.Delete);


mongoose.connect('mongodb://localhost:27017/art-app');
mongoose.connection.once('open', function() {
	console.log('Connected to mongodb\n');
});


app.listen(8080, function() {
	console.log('party has started on port 8080');
})