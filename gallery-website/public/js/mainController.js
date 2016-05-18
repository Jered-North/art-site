angular.module("artApp").controller("mainController", function($scope, $window, mainService) {
	
	$scope.getProducts = function() {
		mainService.getProducts().then(function(response) {
			$scope.products = response;
		})
	};
	$scope.getProducts();


	$scope.getGallItems = function() {
		mainService.getGallItems().then(function(response) {
			$scope.gallItems = response;
		})
	};
	$scope.getGallItems();

	$scope.getCart = function() {
		mainService.getCart().then(function(response) {
			// console.log(response);
			$scope.cartItems = response;
		})
	};
	$scope.getCart();

	$scope.getTotal = function(){
    	var total = 0;
    	for(var i = 0; i < $scope.cartItems.length; i++){
        	var item = $scope.cartItems[i];
        	total += (item.price);
    }
    return total;
}



	$scope.addToCart = function(product) {
		mainService.addToCart(product).then(function(response){
			$scope.getCart();
			alert("object added to cart");
		})
	}

	$scope.removeFromCart = function(item) {
		mainService.removeFromCart(item).then(function(response){
			$scope.getCart();
		});
	}

$scope.sendMail = function(emailId,subject,message){
    $window.open("mailto:"+ "jered.north@gmail.com" + "?subject=" + subject+"&body="+message,"_self");
};
$scope.mailLink = "mailto:" + "jered.north@gmail.com" + "?subject=" + $scope.subject + '&body=' + $scope.bodyText;
});