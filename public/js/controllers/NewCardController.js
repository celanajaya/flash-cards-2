app.controller("NewCardController", function($scope, NewCardFactory, FlashCardsFactory, $rootScope) {
	$scope.categories = [
		"MongoDB",
		"Express",
		"Angular",
		"Node"
	];

	$scope.newCard = NewCardFactory.newCard;
	$scope.submitNewCard = NewCardFactory.postFlashCard;

	$scope.reset = function(){
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
		};
	};

	$scope.finish = function(){
		$rootScope.data.push($scope.newCard);
	};
});