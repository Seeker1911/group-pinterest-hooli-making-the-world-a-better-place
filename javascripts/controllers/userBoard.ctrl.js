app.controller('UserBoardCtrl', function (UserProfileFact) {
	const board = this;
	board.pins = UserProfileFact.pinsList(); //would actually call .filter to find all pins with the boardid
})
