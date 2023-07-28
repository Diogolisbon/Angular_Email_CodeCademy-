var app = angular.module('OutboxApp', ['ngRoute']);

var app = angular.module('OutboxApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/outbox', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/outbox/:id', {
      templateUrl: 'views/email.html',
      controller: 'EmailController'
    })
    .otherwise({
      redirectTo: '/outbox'
    });
});
