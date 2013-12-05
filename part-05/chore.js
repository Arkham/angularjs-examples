var app = angular.module('choreApp', []);

app.controller('ChoreCtrl', function ($scope) {
  $scope.logChore = function (chore) {
    alert(chore + " done");
  }
})

app.directive('kid', function () {
  return {
    restrict: "E",
    scope: {
      done: "&"
    },
    template: '<input type="text" ng-model="chore"> {{chore}}' +
      '<br><div class="button" ng-click="done({chore: chore})">Click me</div>'
  }
})