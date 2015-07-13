app.factory("NewCardFactory", function($http, $rootScope) {
	return {
		postFlashCard: function(cardInfo) {
			$http.post('/cards', cardInfo)
				.then(function(response) {
					console.log(response);
					this.newCard = response;
				});
		},
		newCard: {
			question: null,
			category: null,
			answers: [{
				text: null,
				correct: false
			}, {
				text: null,
				correct: false
			}, {
				text: null,
				correct: false
			}]
		}
	}
});