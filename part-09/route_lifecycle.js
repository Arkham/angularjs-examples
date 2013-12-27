var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "app.html",
      controller: "ViewCtrl"
    })
    .when('/new', {
      templateUrl: "new.html",
      controller: "NewCtrl",
      resolve: {
        loadData: viewCtrl.loadData
      }
    })
})

app.controller('AppCtrl', function ($scope, $rootScope, $route, $location) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    console.log($scope, $rootScope, $route, $location);
    debugger;
  })
  $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
    console.log($scope, $rootScope, $route, $location);
    debugger;
  })
})

var viewCtrl = app.controller('ViewCtrl', function ($scope, $location) {
  $scope.changeRoute = function () {
    console.log($scope);
    debugger;
    $location.path("/new");
  }
})

app.controller('NewCtrl', function ($scope, loadData, $template) {
  console.log($scope, loadData, $template);
  debugger;
})

viewCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();

  $timeout(function () {
    defer.resolve("Everything's great!");
  }, 2000);

  return defer.promise;
}


