var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function ($scope) {
  $scope.leaveVoiceMail = function (number, message) {
    alert("Number " + number + " said: " + message);
  }
})

app.directive('phone', function () {
  return {
    restrict: "E",
    scope: {
      number: "@",
      network: "=",
      makeCall: "&"
    },
    templateUrl: 'phone.html',
    link: function (scope) {
      scope.networks = ['Vodafone', 'Tim', '3 Ita', 'Wind'];
      scope.network = scope.networks[2];
    }
  }
})
