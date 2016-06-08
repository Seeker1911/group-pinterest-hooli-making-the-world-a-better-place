app.controller('UserProfileCtrl', function (UserProfileFact, $timeout) {
	const profile = this;
	profile.name = "User X";
	profile.newBoard = {
		uid: ''
	};
	const request = UserProfileFact.boardsList()
		.then(function (resolve) {
			return profile.boards = resolve
		});

	profile.createNewBoard = function () {
		UserProfileFact.createBoard(profile.newBoard);
		$timeout (() => {
			location.reload()
		}, 1000);
	}

  profile.deleteBoard = function (key) {
    UserProfileFact.deleteBoard(key);
    $timeout (() => {
      location.reload()
    }, 50);
  }

  profile.setEdit = function (key, board) {
  	console.log("board", board);
  	profile.keyToEdit = key;
  	profile.board = board;
	}

  profile.editBoard = function (key) {
  	console.log(profile.edit);
  	UserProfileFact.editBoard(key, profile.edit);
  	profile.boards[key] = profile.edit;

	}
})
