var app = angular.module('myApp', []);

app.factory('Data', function() {
  return { message: "This is a shared service" };
});

app.filter('reverse', function() {
  return function(text) {
    return text.split("").reverse().join("");
  };
});

function FirstController($scope, Data) {
  $scope.data = Data;
};

function SecondController($scope, Data) {
  $scope.data = Data;
};

