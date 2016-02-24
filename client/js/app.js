var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/login.html'
		// controller: 'loginController'
	})
	 .when('/home', {
 	 templateUrl: 'partials/home.html'
	 })
   .when('/result/:abbrev', {
		templateUrl: 'partials/abbreviation.html'
	})
  .when('/guestbook', {
   templateUrl: 'partials/guestbook.html'
 })
  .otherwise ({
    redirectTo: '/'
  });
});
