(function() {
	var EventNewController = function(
		$state,
		EventsService
	) {
		var ctrl = this;

		ctrl.$onInit = function() {
			ctrl.event = {};
		};

		ctrl.save = function() {
			EventsService.create(ctrl.event)
				.then(function(results) {
					$state.go('home');
				});
		};

		ctrl.setTimezoneOffset = function() {
			var datetime = ctrl.event.datetime;
			var timezoneName = ctrl.locations.find(function(location) {
				return location.id === ctrl.event.LocationId;
			}).timezone;

			ctrl.event.timezoneOffset = moment(datetime).tz(timezoneName).format('ZZ');

			// convert the datetime to the new timezone, if one's been chosen
			if (datetime) {
				ctrl.event.datetime = moment(datetime).tz(timezoneName);
			}
		};
	};

	angular
		.module('root')
		.controller('EventNewController', EventNewController);
})(window.angular);
