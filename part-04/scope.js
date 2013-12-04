var app = angular.module('scopeApp', []);

app.controller('scopeCtrl', function ($scope) {
  $scope.doSomething = function () {
    console.log("something was done");
  }
})

app.directive('dialog', function () {
  return {
    restrict: "E",
    transclude: true,

    scope: {
      title: "@",
      onOk: "&",
      onCancel: "&",
      visible: "="
    },

    templateUrl: 'dialog.html'
  }
})
