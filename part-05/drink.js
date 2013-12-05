var app = angular.module('drinkApp', []);

app.controller('AppCtrl', function ($scope) {
  $scope.ctrlFlavour = "blackberry";
})

app.directive('drink', function () {
  return {
    scope: {
      flavor: "@"
    },
    template: "<div class='panel'>{{flavor}}</div>"
  }
})

app.directive('sweet', function () {
  return {
    scope: {
      flavor: "="
    },
    template: "<div class='panel'>{{flavor}}</div>"
  }
})

