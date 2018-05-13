(function(angular) {
	var EventsService = ['$http', function($http) {
		var baseUrl = '/api/events/';

		return {
			create: create,
			getAll: getAll
		};

		function create(event) {
			return $http.post(baseUrl, event)
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
		.factory('EventsService', EventsService);
})(window.angular);
