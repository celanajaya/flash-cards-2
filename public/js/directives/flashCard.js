//directives are camel case here, but dash case in HTML
app.directive('flashCard', function(ScoreFactory){
	return {
		restrict: 'E',
		card: '=',
			//or theCard: '=card' also maps the variable name
		templateUrl: "/js/directives/flashCard.html",
		link: function(scope, element, attribute){
			scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					flashCard.answered = true;
					flashCard.answeredCorrectly = answer.correct;
					if (answer.correct) ScoreFactory.correct++;
					else ScoreFactory.incorrect++;	
					}
				}
		}
	};
});