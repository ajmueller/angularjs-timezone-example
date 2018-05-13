(function(angular) {
	var LocationsService = ['$http', function($http) {
		var baseUrl = '/api/locations/';

		return {
			create: create,
			getAll: getAll
		};

		function create(location) {
			return $http.post(baseUrl, location)
				.then(function(response) {
					return response.data;
				});
		}

		function getAll() {
			return $http.get(baseUrl)
				.then(function(response) {
					return response.data;
				});
		}
	}];

	angular
		.module('root')
		.factory('LocationsService', LocationsService);
})(window.angular);
