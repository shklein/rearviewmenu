var myApp = angular.module('myApp', ['ngRoute', 'ngModal']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "PostController"
    })
    .when('/submit', {
      templateUrl: '/views/submit.html',
      controller: "PostController"
    })
    .when('/search', {
      templateUrl: '/views/search.html',
      controller: "GetController"
    })
    .when('/cal', {
      templateUrl: '/views/cal.html',
      controller: "GetController"
    })
    .otherwise({
      redirectTo: 'home'
    })

}
]);
