app.controller('UserBoardCtrl', function (UserProfileFact, $routeParams) {
	const board = this;
	const key = $routeParams.key;
	board.name = $routeParams.name;
	board.pins = [];

	const request = UserProfileFact.pinsList()
		.then(function (resolve) {
			for(id in resolve) {
				if (resolve[id].boardid === key) {
					console.log(resolve[id])
					board.pins.push(resolve[id]);
				}
			}
			console.log(board.pins);
			return board.pins;
		});


})
