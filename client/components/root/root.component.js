(function(angular) {
	var root = {
		templateUrl: 'components/root/root.html'
	};

	angular
		.module('root')
		.config(['$urlRouterProvider', function($urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');
		}])
		.component('root', root);
})(window.angular);
