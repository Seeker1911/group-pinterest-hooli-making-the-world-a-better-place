app.controller('UserProfileCtrl', function (UserProfileFact) {
	const profile = this;
	profile.boards = UserProfileFact.boardsList();
})
