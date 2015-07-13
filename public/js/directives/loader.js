app.directive('loader', function(){
	return {
		restrict: 'E',
		scope: true,
		templateUrl: "/js/directives/loader.html"
	};
});

//templateUrl makes an AJAX request to the address specified.