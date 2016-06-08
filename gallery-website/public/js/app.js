angular.module("artApp", ["ui.router"])

	.config(function($stateProvider, $urlRouterProvider) {

		// MAIN STATES ------------------------

		$stateProvider
			.state('home', {
				url: "/home",
				templateUrl: "templates/home.html"
			})

			.state('about', {
				url:"/about",
				templateUrl: "templates/about.html"
			})

			.state('gallery', {
				url:"/gallery",
				templateUrl: "templates/gallery.html"
			})

			.state('shop', {
				url:"/shop",
				templateUrl: "templates/shop.html"
			})
			 
			.state('contact', {
				url:"/contact",
				templateUrl: "templates/contact.html"
			})

			.state('cart', {
				url:"/cart",
				templateUrl: "templates/cart.html"
			})

			$urlRouterProvider.otherwise('/home');

		// GALLERY VIEWS ---------------------------------

		$stateProvider
			.state('gallery.daughter-of-the-violets', {
				url:"/daughter-of-the-violets",
				templateUrl: "templates/gallery-views/daughter-of-the-violets.html"
			})

			.state('gallery.alicea-fenn', {
				url:"/alicea-fenn",
				templateUrl: "templates/gallery-views/alicea-fenn.html"
			})

			.state('gallery.eldrin', {
				url:"/eldrin",
				templateUrl: "templates/gallery-views/eldrin.html"
			})

			.state('gallery.star-guardian-ulario', {
				url:"/star-guardian-ulario",
				templateUrl: "templates/gallery-views/star-guardian-ulario.html"
			})

			.state('gallery.the-vigilante', {
				url:"/the-vigilante",
				templateUrl: "templates/gallery-views/the-vigilante.html"
			})

			.state('gallery.the-mercenary-of-the-four-kingdoms', {
				url:"/the-mercenary-of-the-four-kingdoms",
				templateUrl: "templates/gallery-views/the-mercenary-of-the-four-kingdoms.html"
			})

			.state('gallery.prince-galin', {
				url:"/prince-galin",
				templateUrl: "templates/gallery-views/prince-galin.html"
			})

			.state('gallery.the-time-travelers-chaos', {
				url:"/the-time-travelers-chaos",
				templateUrl: "templates/gallery-views/the-time-travelers-chaos.html"
			})

			.state('gallery.diehu', {
				url:"/diehu",
				templateUrl: "templates/gallery-views/diehu.html"
			})

			.state('gallery.chiraren', {
				url:"/chiraren",
				templateUrl: "templates/gallery-views/chiraren.html"
			})

			.state('gallery.rain-belikov', {
				url:"/rain-belikov",
				templateUrl: "templates/gallery-views/rain-belikov.html"
			})

			.state('gallery.showtime', {
				url:"/showtime",
				templateUrl: "templates/gallery-views/showtime.html"
			})

			.state('gallery.lady-in-an-art-gallery', {
				url:"/lady-in-an-art-gallery",
				templateUrl: "templates/gallery-views/lady-in-an-art-gallery.html"
			})

			.state('gallery.daughter-of-the-stars', {
				url:"/daughter-of-the-stars",
				templateUrl: "templates/gallery-views/daughter-of-the-stars.html"
			})

			.state('gallery.siwang', {
				url:"/siwang",
				templateUrl: "templates/gallery-views/siwang.html"
			})

			.state('gallery.little-red-copperhead', {
				url:"/little-red-copperhead",
				templateUrl: "templates/gallery-views/little-red-copperhead.html"
			})

	});