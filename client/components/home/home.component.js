(function(angular) {
	var home = {
		bindings: {
			locations: '<',
			events: '<'
		},
		templateUrl: 'components/home/home.html'
	};

	angular
		.module('root')
		.component('home', home)
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('home', {
					url: '/home',
					component: 'home',
					resolve: {
						locations: function(LocationsService) {
							return LocationsService.getAll();
						},

						events: function(EventsService) {
							return EventsService.getAll();
						}
					}
				});
		}]);
})(window.angular);
