var app = angular.module('app', []);

app.controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log($scope);
  console.log($http);
}]);

app.directive('myDirective', function () {
  return {
    restrict: "A",
    scope: {},
    link: function (scope) {
      console.log(scope);
    }
  }
})
