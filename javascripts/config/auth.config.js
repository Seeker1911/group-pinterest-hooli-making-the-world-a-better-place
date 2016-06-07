app.config(($routeProvider) => ($routeProvider
	.when('/', {
		controller: 'AuthCtrl',
		controllerAs: 'auth',
		templateUrl: 'javascripts/partials/login.html'
	})
	.when ('/userProfile', { // '/:id/userProfile'
		controller: 'UserProfileCtrl',
		controllerAs: 'profile',
		templateUrl: 'javascripts/partials/userProfile.html'
	})
	.when('/userprofile/userBoard', { // '/:id/userprofile/:id/userboard'
		controller:'UserBoardCtrl',
		controllerAs: 'board',
		templateUrl: 'javascripts/partials/userBoard.html'
	})
))
