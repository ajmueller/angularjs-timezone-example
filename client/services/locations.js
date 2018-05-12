(function(angular) {
	var LocationsService = ['$http', function($http) {
		var baseUrl = '/api/locations/';

		return {
			getAll: getAll
		};

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
