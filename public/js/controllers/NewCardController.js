app.controller("NewCardController", function($scope, submitNewCard) {
	$scope.categories = [
		"MongoDB",
		"Express",
		"Angular",
		"Node"
	];
	$scope.submitNewCard = submitNewCard.postFlashCard;
	$scope.newCard = {
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
})