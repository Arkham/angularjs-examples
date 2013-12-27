var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "app.html",
      controller: "AppCtrl",
      resolve: {
        loadData: appCtrl.loadData,
        prepareData: appCtrl.prepareData
      }
    })
})

var appCtrl = app.controller('AppCtrl', function ($scope, $route) {
  console.log($route);

  $scope.model = {
    title: "This is my app!"
  }
})

appCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();

  $timeout(function () {
    defer.resolve("loadData");
    console.log("loadData: " + new Date());
  }, 2000);

  return defer.promise;
}

appCtrl.prepareData = function ($q, $timeout) {
  var defer = $q.defer();

  $timeout(function () {
    defer.resolve("prepareData");
    console.log("prepareData:" + new Date());
  }, 1000);

  return defer.promise;
}

