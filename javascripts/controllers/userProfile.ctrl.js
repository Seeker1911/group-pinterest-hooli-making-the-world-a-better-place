app.controller('UserProfileCtrl', function (UserProfileFact, $timeout) {
	const profile = this;
	profile.name = "User X";
	const request = UserProfileFact.boardsList()
		.then(function (resolve) {
			return profile.boards = resolve
		});
	// profile.newBoard.uid = 'placeholder';
	profile.createNewBoard = function () {
		UserProfileFact.createBoard(profile.newBoard);
		$timeout (() => {
			location.reload()
		}, 1000);
	}
})
