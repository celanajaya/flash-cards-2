app.factory("submitNewCard", function($http) {
	return {
		postFlashCard: function(cardInfo) {
			$http.post('/cards', cardInfo)
				.then(function(response) {
					console.log(response);
				})
		}
	}

});