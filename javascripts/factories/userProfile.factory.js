app.factory("UserProfileFact", function ($http) {
	const profileFact = this;
	const boardsUrl = 'https://hooli-45267.firebaseio.com/boards';
	const pinsUrl = 'https://hooli-45267.firebaseio.com/pins';
	const boards = $http.get(`${boardsUrl}.json`)
    .then((response) => {
      console.log("response", response);
  })

  const pins = $http.get(`${pinsUrl}.json`)
    .then((response) => {
      console.log("response", response);
  })





	return {
		filter (id) {
			for (key in pins) { //pins being the variable with the pin fb
				return boardpins = pins.filter(function () {
					return key.boardid === id
				})
			}
		},
		boardsList () {
			return boards;
		},
		pinsList () {
			return pins;
		}

	}

})
