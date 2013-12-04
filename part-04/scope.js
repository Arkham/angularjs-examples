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

    template:
    '<div ng-show="visible">' +
      '<h3>{{title}}</h3>' +
      '<div class="body" ng-transclude></div>' +
      '<div class="footer">' +
        '<button ng-click="onOk()">Save changes</button>' +
        '<button ng-click="onCancel()">Close</button>' +
      '</div>' +
    '</div>'
  }
})
