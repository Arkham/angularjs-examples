var app = angular.module('app', []);
app.factory('game', function () {
  return { title: 'StarCraft' };
});
app.controller('AppCtrl', [
  '$scope',
  'game',
  function ($scope, game) {
    $scope.title = game.title;
  }
]);