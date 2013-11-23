var app = angular.module('myApp', []);

app.factory('Data', function() {
  return { message: "This is a shared service" };
});

function FirstController($scope, Data) {
  $scope.data = Data;
};

function SecondController($scope, Data) {
  $scope.data = Data;
};
