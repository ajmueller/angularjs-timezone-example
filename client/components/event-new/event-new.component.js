(function(angular) {
	var eventNew = {
		bindings: {
			locations: '<'
		},
		templateUrl: 'components/event-new/event-new.html',
		controller: 'EventNewController'
	};

	angular
		.module('root')
		.component('eventNew', eventNew)
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('eventNew', {
					url: '/events/new',
					component: 'eventNew',
					resolve: {
						locations: function(LocationsService) {
							return LocationsService.getAll();
						}
					}
				});
		}]);
})(window.angular);
