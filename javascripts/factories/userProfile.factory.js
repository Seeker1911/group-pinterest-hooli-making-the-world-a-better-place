"use strict";
app.factory("UserProfileFact", function ($http) {
	const profileFact = this;
	const boardsUrl = 'https://hooli-45267.firebaseio.com/boards';
	const pinsUrl = 'https://hooli-45267.firebaseio.com/pins';
	const boards = $http.get(`${boardsUrl}.json`)
    .then((response) => {
    	console.log(`${boardsUrl}.json`)
      return response.data;
  })

  const pinsGet = $http.get(`${pinsUrl}.json`)
    .then((response) => {
    	return response.data;
  })





	return {
		boardsList () {
			return boards;
		},
		pinsList () {
			return pinsGet;
		}

	}

})
