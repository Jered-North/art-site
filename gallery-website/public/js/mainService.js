angular.module("artApp").service("mainService", function($http, $q) {

	this.getProducts = function() {
		return $http({
			method: "GET",
			url: "/api/products"
		}).then(function(response) {
			return response.data
		})
	};

    this.getGallItems = function() {
        return $http({
            method: "GET",
            url: "/api/gallery"
        }).then(function(response) {
            return response.data
        })
    }

    this.getCart = function() {
        return $http({
            method: "GET",
            url: "/cart"
        }).then(function(response) {
            // console.log(response.data);
            return response.data
        })
    }


	this.addToCart = function(product){
        return $http({
            method: "POST",
            url: "/cart",
            data: {
                id: product._id,
                picture: product.picture,
                price: product.price,
                title: product.title
            }
        }).then(function(response){
            // console.log(response.data);
            return response.data
        })
    }

    this.removeFromCart = function(item){
        return $http({
            method: "DELETE",
            url: "/cart"
        }).then(function(response){
            return response.data
        })
    }
});