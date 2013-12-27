var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "app.html",
      controller: "ViewCtrl",
      resolve: {
        loadData: viewCtrl.loadData
      }
    })
})

app.directive('networkError', function ($rootScope) {
  return {
    restrict: "E",
    template: "<div class='alert-box alert' ng-show=isError>Network Error: {{reason}}</div>",
    link: function (scope) {
      $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        scope.isError = true;
        scope.reason = rejection;
      })
    }
  }
})

app.controller('AppCtrl', function ($rootScope) {
  $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
    console.log(event);
    console.log(current);
    console.log(previous);
    console.log(rejection);
  })
})

var viewCtrl = app.controller('ViewCtrl', function ($scope, $route) {
  console.log($route);

  $scope.model = {
    title: "This is my app!"
  }
})

viewCtrl.loadData = function ($q, $timeout) {
  var defer = $q.defer();

  $timeout(function () {
    defer.reject("Network is down");
    // defer.resolve("Everything's great!");
  }, 2000);

  return defer.promise;
}

