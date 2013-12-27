var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app.html',
      controller: 'AppCtrl'
    })
    .when('/foo', {
      templateUrl: 'foo.html',
      controller: 'FooCtrl'
    })
    .when('/pizza', {
      template: "<p>Yummy</p>"
    })
    .when('/say/:message', {
      template: "<p>Message received: {{model.message}}</p>",
      controller: "MessageCtrl"
    })
    .when('/map/:country/:region/:city', {
      template: "<p>Map in {{model.address}}</p>",
      controller: "MapCtrl"
    })
    .otherwise({
      template: "<p>Nothing to see here, move on</p>"
    })
})

app.controller('AppCtrl', function ($scope) {
  $scope.model = {
    title: "This is my title"
  }
})

app.controller('FooCtrl', function ($scope) {
  $scope.model = {
    title: "This is my title FOOOOOOO"
  }
})

app.controller('MessageCtrl', function ($scope, $routeParams) {
  $scope.model = {
    message: $routeParams.message
  }
})

app.controller('MapCtrl', function ($scope, $routeParams) {
  $scope.model = {
    address: [
      $routeParams.country,
      $routeParams.region,
      $routeParams.city
    ].join(", ")
  }
})
