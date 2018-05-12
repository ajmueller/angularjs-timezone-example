(function(angular) {
	var locations = {
		bindings: {
			locations: '<'
		},
		templateUrl: 'components/locations/locations.html'
	};

	angular
		.module('root')
		.component('locations', locations)
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('locations', {
					url: '/locations',
					component: 'locations',
					resolve: {
						locations: function(LocationsService) {
							return LocationsService.getAll();
						}
					}
				});
		}]);
})(window.angular);
