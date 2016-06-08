app.controller('UserProfileCtrl', function (UserProfileFact) {
	const profile = this;
	profile.name = "User X";
	const request = UserProfileFact.boardsList()
		.then(function (resolve) {
			return profile.boards = resolve
		});
})
