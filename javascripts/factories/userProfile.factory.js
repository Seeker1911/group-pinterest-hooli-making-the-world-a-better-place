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
		},
		createBoard (data) {
			$http.post(`${boardsUrl}.json`, data);
		},
		createPin (data) {
			$http.post(`${pinsUrl}.json`, data);
		},
    deleteBoard (index) {
      $http.delete(`${boardsUrl}/${index}.json`)
    },
    deletePin (index) {
      $http.delete(`${pinsUrl}/${index}.json`)
      console.log("Delete Log", `${pinsUrl}/${index}.json`)
    },
    editBoard (index, data) {
    	$http.patch(`${boardsUrl}/${index}.json`, data);
    },
    editPin (index, data) {
    	$http.patch(`${pinsUrl}/${index}.json`, data);
    }
	}
})
