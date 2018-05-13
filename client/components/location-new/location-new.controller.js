(function() {
	var LocationNewController = function(
		$state,
		LocationsService
	) {
		var ctrl = this;

		ctrl.$onInit = function() {
			ctrl.location = {};
		};

		ctrl.save = function() {
			LocationsService.create(ctrl.location)
				.then(function(results) {
					$state.go('locations');
				});
		};
	};

	angular
		.module('root')
		.controller('LocationNewController', LocationNewController);
})(window.angular);
