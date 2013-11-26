var app = angular.module('myApp', []);

app.factory('Avengers', function($http) {
  var Avengers = { cast: null };

  $http.get('avengers.json').success(function(data) {
    Avengers.cast = data;
  });

  return Avengers;
});

function AvengersCtrl($scope, Avengers) {
  $scope.avengers = Avengers;
}
