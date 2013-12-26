var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app.html',
    controller: 'AppCtrl'
  }).when('/foo', {
    templateUrl: 'foo.html',
    controller: 'FooCtrl'
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
