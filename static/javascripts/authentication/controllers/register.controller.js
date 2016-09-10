/**
* Register controller
* @namespace thinkster.authentication.controllers
*/

(function() {
	'use strict',

	angular
		.module('thinkster.authentication.controllers')
		.controller('RegisterController', RegisterController);

	RegisterController.$inject = ['$location', '$scope', 'Authentication'];

	/**
	* @namespace RegisterController
	*/

	function RegisterController($location, $scope, Authentication) {
		var vm = this;

		vm.register = register;

		activate();

		/**
		* @name activate
		* @desc Actions to be performed when this controller is instantiated
		* @mebmerOf thinkster.authentication.controllers.RegisterController
		*/
		function activate() {			
			if (Authentication.isAuthenticated()) {
				$location.url('/');
			}
		}

		/*
		* @name register
		* @ Register a new user
		* memberOf thinkster.authentication.controllers.RegisterController		
		*/

		function register() {
			Authentication.register(vm.email, vm.password, vm.username);
		}
	}
})();