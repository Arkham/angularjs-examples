var app = angular.module('superApp', []);

app.directive('superhero', function () {
  return {
    element: 'E',

    controller: function ($scope) {
      $scope.abilities = []

      this.addStrength = function () {
        $scope.abilities.push("strength")
      }

      this.addSpeed = function () {
        $scope.abilities.push("speed")
      }

      this.addFlight = function () {
        $scope.abilities.push("flight")
      }
    },

    link: function (scope, element) {
      element.bind('mouseenter', function () {
        console.log(scope.abilities)
      })
    }
  }
})
