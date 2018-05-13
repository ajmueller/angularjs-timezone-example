(function(angular) {
	var locationNew = {
		templateUrl: 'components/location-new/location-new.html',
		controller: 'LocationNewController'
	};

	angular
		.module('root')
		.component('locationNew', locationNew)
		.config(['$stateProvider', function($stateProvider) {
			$stateProvider
				.state('locationNew', {
					url: '/locations/new',
					component: 'locationNew'
				});
		}]);
})(window.angular);
