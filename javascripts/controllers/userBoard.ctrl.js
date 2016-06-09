app.controller('UserBoardCtrl', function (UserProfileFact, $routeParams, $timeout) {
	const board = this;
	const key = $routeParams.key;
	board.name = $routeParams.name;
	board.pins = new Object ();
	board.newPin = {
		boardid: key,
		uid: ''
	}

  const request = UserProfileFact.pinsList()
    .then(function (resolve) {
      for(id in resolve) {
        if (resolve[id].boardid === key) {
          console.log(resolve[id])
          board.pins[id] = resolve[id];
        }
    }
    console.log(board.pins);
    return board.pins;
  });
	board.createNewPin = function () {
    UserProfileFact.createPin(board.newPin);
    $timeout (() => {
      location.reload()
    }, 1000);
  }

  board.deletePin = function (key) {
		UserProfileFact.deletePin(key);
		$timeout (() => {
			location.reload()
		}, 50);
	}

  board.setEditPin = function (key, pin) {
    board.keyToEdit = key;
    board.pin = pin;
  }

  board.editPin = function (key) {
    UserProfileFact.editPin(key, board.edit);
    board.pins[key] = board.edit;
  }


})
